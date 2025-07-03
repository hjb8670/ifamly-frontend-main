import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll, PopoverController } from '@ionic/angular';
import { ExperienceMenuPopoverPage } from '../experience/experience-menu-popover/experience-menu-popover.page';
import { Experience, Catalog, User, ImagesExperience } from '../../interfaces/interfaces';
import { constants } from 'src/environments/constants';
import { TranslateService } from '@ngx-translate/core';
import { ExperienceService } from '../../services/experience.service';
import { UserService } from '../../services/user.service';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';
import { set } from 'date-fns';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-tabExperience',
  templateUrl: 'tabExperience.page.html',
  styleUrls: ['tabExperience.page.scss']
})
export class TabExperiencePage {
  @ViewChild (IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public isMyExp = false;
  private lanCatalogo = 'EN';
  public isBigList = true;
  private user: User = {};
  public experienceCat: Catalog[] = [];
  public experiences: Experience[] = [];
  searchTerm: string = '';
  filteredExperiences: any[] = [];
  private iniExp = 0;
  private deltaExp = 10;
  private cateExp = null;
  public lanDate = 'en_US';
  public mostrarLoginFinito = true;
  showfilter: boolean = false;
  private loadedExperienceIds: Set<number> = new Set(); // Track loaded experience IDs

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private translate: TranslateService,
    private popoverCtrl: PopoverController,
    private experienceService: ExperienceService,
    private userService: UserService, 
    private uiService: UiService
  ) {
    
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.isMyExp = this.router.getCurrentNavigation().extras.state.isMyExp;
        
        console.log('MyExp: ', this.isMyExp);
      }
      this.principal();
    });
  }

  async ionViewDidEnter() {
    if(this.translate.currentLang == 'es'){
      this.lanCatalogo = constants.languages.es;
      this.lanDate = 'es_MX'
    } else {
      this.lanCatalogo = constants.languages.en;
      this.lanDate = 'en_US'
    }
  }

  filterexp(){
    if(this.showfilter == false){
    this.showfilter=true;
    }else{
      this.showfilter=false;
    }
  }

  filterExperiences() {
    const term = this.searchTerm.trim().toLowerCase();
  
    if (term.length < 2) {
      this.filteredExperiences = [...this.experiences]; // Or empty if you prefer
      return;
    }
  
    this.filteredExperiences = this.experiences.filter(exp => {
      const title = exp.title;
       // Format both short and full month version
       const formattedShort = formatDate(exp.dateTime, 'LLL, dd, hh:mm aa', this.lanDate || 'en-US').toLowerCase();
       const formattedFull = formatDate(exp.dateTime, 'LLLL, dd, hh:mm aa', this.lanDate || 'en-US').toLowerCase(); 
      const loc = exp.location || {};
      return (
        
        title.toLowerCase().includes(term) ||
        loc.country?.toLowerCase().includes(term) ||
        loc.state?.toLowerCase().includes(term) ||
        formattedShort.includes(term) ||
        formattedFull.includes(term) ||
        loc.city?.toLowerCase().includes(term)
      );
    });
  }
  

  async principal(){
    // const tVal = await this.userService.validaToken();
    // if( !tVal ) {
    //   return;
    // } //Haciendo menos pesada las busquedas
    await this.uiService.showLoader();
    this.user = <User> await this.userService.getUserBasic('');
    this.user.location = null; // NULL mientras se define VIP
    console.log('USR: ', this.user);
    
    //PAra que sirve este catalogo ?
    this.experienceCat = <Catalog[]> await this.userService.getCatalogo(constants.catalogs.ExperienceCat.toString(), this.lanCatalogo);
    console.log('CAT EXP: ', this.experienceCat);

    // Reset all pagination and category state
    this.iniExp = 0;
    this.cateExp = null;
    this.experiences = [];
    this.loadedExperienceIds.clear(); // Clear the set of loaded IDs
    
    const preloadImages = async (experiences) => {
      const imageUrls = experiences.map((exp) => exp.image);
      const promises = imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      await Promise.all(promises);
    };
    
    // Load initial batch of experiences
    await this.loadInitialExperiences();
    await preloadImages(this.experiences);
    
    console.log('EXPERIENCIES: ', this.experiences);
    this.uiService.hideLoader();
  }

  private async loadInitialExperiences() {
    // Load experiences in batches until we have a good initial set
    let hasMore = true;
    let consecutiveEmptyBatches = 0;
    const maxEmptyBatches = 3; // Stop after 3 consecutive empty batches
    
    while (hasMore && this.experiences.length < 30 && consecutiveEmptyBatches < maxEmptyBatches) {
      const newExperiences = await this.getProcessedExperiences();
      
      if (newExperiences.length === 0) {
        consecutiveEmptyBatches++;
        this.iniExp += this.deltaExp; // Still increment to avoid infinite loop
      } else {
        consecutiveEmptyBatches = 0;
        
        // Filter out duplicates using experienceId
        const uniqueNewExperiences = newExperiences.filter(exp => {
          if (this.loadedExperienceIds.has(exp.experienceId)) {
            return false; // Skip duplicate
          }
          this.loadedExperienceIds.add(exp.experienceId);
          return true;
        });
        
        if (uniqueNewExperiences.length > 0) {
          this.experiences.push(...uniqueNewExperiences);
        }
        
        this.iniExp += this.deltaExp;
      }
    }
    
    this.filteredExperiences = [...this.experiences];
    
    console.log(`Loaded ${this.experiences.length} unique experiences`);
  }

  private async getProcessedExperiences(): Promise<Experience[]> {
    const rawExperiences = <Experience[]>await this.getExperiences();
    
    return rawExperiences
      .filter(exp => new Date(exp.dateTime).getTime() >= Date.now()) // filter out past events
      .sort((a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime()); // sort soonest to latest
  }

  async setAvatarImg(experience: Experience[]) {
    for (const exp of experience) {
      
      exp.image ='../../../assets/icon/30-Default_no-image.jpeg';
      const res_imgs =  <ImagesExperience[]> await this.experienceService.getIMGS(exp.experienceId.toString());
      for (const img of res_imgs) {
        if(img.avatar) {
          exp.image = img.multimediaUrl;
        }
      }
    }

  }

  async openMenuPopover( ev: any ) {
    const popover = await this.popoverCtrl.create({
      component: ExperienceMenuPopoverPage,
      event: ev,
      componentProps: { isMyExp: this.isMyExp }
    });

    /* popover.onDidDismiss().then((result: object) => {
      console.log('RES POPOVER: ', result);
      
    }); */

    await popover.present();
  }

  changeList() {
    this.isBigList = !this.isBigList;
  }

  async optionSelected(ev: any) {
    // Show loader for category change
    await this.uiService.showLoader();
    
    // Fix: Handle "all" case properly by setting cateExp to null
    this.cateExp = ev.detail.value === 'all' ? null : Number(ev.detail.value);
    
    // Reset everything for new category
    this.iniExp = 0;
    this.experiences = [];
    this.filteredExperiences = [];
    this.loadedExperienceIds.clear(); // Clear the set of loaded IDs
    
    // Re-enable infinite scroll in case it was disabled
    if (this.infiniteScroll) {
      this.infiniteScroll.disabled = false;
    }
    
    // Load initial batch for the selected category
    await this.loadInitialExperiences();
    
    console.log('EXPERIENCIES: ', this.experiences);
    console.log('Selected category: ', this.cateExp);
    
    this.uiService.hideLoader();
  }

  async loadExp(ev: any){
    const newExp = await this.getProcessedExperiences();
    
    setTimeout(() => {
      if(newExp.length < 1) {
        // No more experiences to load
        this.infiniteScroll.disabled = true;
      } else {
        // Filter out duplicates using experienceId
        const uniqueNewExperiences = newExp.filter(exp => {
          if (this.loadedExperienceIds.has(exp.experienceId)) {
            return false; // Skip duplicate
          }
          this.loadedExperienceIds.add(exp.experienceId);
          return true;
        });
        
        if (uniqueNewExperiences.length > 0) {
          // Add new unique experiences and update filtered list
          this.experiences.push(...uniqueNewExperiences);
          this.filteredExperiences = [...this.experiences];
        }
        
        this.iniExp += this.deltaExp;
        
        // If no new unique experiences were added, disable infinite scroll
        if (uniqueNewExperiences.length === 0) {
          this.infiniteScroll.disabled = true;
        }
      }
      this.infiniteScroll.complete();
    }, 100);
  }

  async getExperiences(): Promise<Experience[]> {
    let exps: Experience[];

    if(this.isMyExp) {
      exps = <Experience[]> await this.experienceService.getMyExperiences(this.iniExp.toString(), this.deltaExp.toString(), this.cateExp)
    }else {
      exps = <Experience[]> await this.experienceService.getExperiences(this.iniExp.toString(), this.deltaExp.toString(), this.user.location, this.cateExp);
    //  debugger;
    }
    
   await this.setAvatarImg(exps);

    return exps;
  }

  selectExperience( expId: number ) {
    let navegationExtras: NavigationExtras = {
      state: {
        expId,
        isMyExp: this.isMyExp
      }
    }
    
    this.router.navigate(['detail-exp'], navegationExtras);
  }

  async setPortadaImg(expP: Experience[]) {
    /* for (const exp of expP) {
      exp.image = '../../../assets/icon/30-Default_no-image.jpeg';

      const res_imgs =  <ImagesUser[]> await this.matchService.getIMGS(usr.personLikes.toString());
      for (const img of res_imgs) {
        if(img.avatar) {
          usr.image = img.multimediaUrl;
        }
      }
    } */

  }
}