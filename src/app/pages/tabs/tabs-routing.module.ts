import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'experience',
        loadChildren: () => import('../tabExperience/tabExperience.module').then(m => m.TabExperiencePageModule)
      },
      {
        path: 'my-experience',
        loadChildren: () => import('../tabExperience/tabExperience.module').then(m => m.TabExperiencePageModule)
      },
      {
        path: 'discover',
        loadChildren: () => import('../tabDiscover/tabDiscover.module').then(m => m.TabDiscoverPageModule)
      },
      {
        path: 'match',
        loadChildren: () => import('../tabMatch/tabMatch.module').then(m => m.TabMatchPageModule)
      },
      {
        path: 'message',
        loadChildren: () => import('../tabMessage/tabMessage.module').then(m => m.TabMessagePageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../tabAccount/tabAccount.module').then(m => m.TabAccountPageModule)
      },
      {
        path: '',
        redirectTo: '/main/tabs/experience',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/main/tabs/experience',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
