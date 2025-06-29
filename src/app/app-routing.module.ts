import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserGuard } from './guards/user.guard';
import { InitGuard } from './guards/init.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'registry'
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    canLoad: [ UserGuard ]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
    // canActivate: [InitGuard],
  },
  {
    path: 'registry',
    loadChildren: () => import('./pages/auth/registry/registry.module').then( m => m.RegistryPageModule),
    canActivate: [InitGuard]
  },
  {
    path: 'my-mobile',
    loadChildren: () => import('./pages/auth/my-mobile/my-mobile.module').then( m => m.MyMobilePageModule)
  },
  {
    path: 'experience-menu-popover',
    loadChildren: () => import('./pages/experience/experience-menu-popover/experience-menu-popover.module').then( m => m.ExperienceMenuPopoverPageModule)
  },
  {
    path: 'verification-code',
    loadChildren: () => import('./pages/auth/verification-code/verification-code.module').then( m => m.VerificationCodePageModule)
  },
  {
    path: 'profile-details',
    loadChildren: () => import('./pages/auth/profile-details/profile-details.module').then( m => m.ProfileDetailsPageModule)
  },
  {
    path: 'about-me',
    loadChildren: () => import('./pages/auth/about-me/about-me.module').then( m => m.AboutMePageModule),
    // canLoad: [ UserGuard ]
  },
  {
    path: 'i-am-alooking-for',
    loadChildren: () => import('./pages/auth/i-am-alooking-for/i-am-alooking-for.module').then( m => m.IAmALookingForPageModule),
    // canLoad: [ UserGuard ]
  },
  {
    path: 'location',
    loadChildren: () => import('./pages/auth/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'notification-prompt',
    loadChildren: () => import('./pages/auth/notification-prompt/notification-prompt.module').then( m => m.NotificationPromptPageModule)
  },
  {
    path: 'detail-exp',
    loadChildren: () => import('./pages/experience/detail-exp/detail-exp.module').then( m => m.DetailExpPageModule),
    canLoad: [ UserGuard ]
  },
  {
    path: 'new-edit-exp',
    loadChildren: () => import('./pages/experience/new-edit-exp/new-edit-exp.module').then( m => m.NewEditExpPageModule),
    canLoad: [ UserGuard ]
  },
  {
    path: 'detail-match',
    loadChildren: () => import('./pages/match/detail-match/detail-match.module').then( m => m.DetailMatchPageModule),
    canLoad: [ UserGuard ]
  },
  {
    path: 'leave-ratings',
    loadChildren: () => import('./pages/match/leave-ratings/leave-ratings.module').then( m => m.LeaveRatingsPageModule),
    canLoad: [ UserGuard ]
  },
  {
    path: 'ratings',
    loadChildren: () => import('./pages/match/ratings/ratings.module').then( m => m.RatingsPageModule),
    canLoad: [ UserGuard ]
  },
  {
    path: 'edit-account',
    loadChildren: () => import('./pages/account/edit-account/edit-account.module').then( m => m.EditAccountPageModule)
  },
  {
    path: 'settings-account',
    loadChildren: () => import('./pages/account/settings-account/settings-account.module').then( m => m.SettingsAccountPageModule)
  },
  {
    path: 'detail-match-menu-popover',
    loadChildren: () => import('./pages/match/detail-match-menu-popover/detail-match-menu-popover.module').then( m => m.DetailMatchMenuPopoverPageModule)
  },
  {
    path: 'photos-view',
    loadChildren: () => import('./pages/extras/photos-view/photos-view.module').then( m => m.PhotosViewPageModule)
  },
  {
    path: 'params',
    loadChildren: () => import('./pages/extras/privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/auth/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/extras/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'report-popover',
    loadChildren: () => import('./pages/match/report-popover/report-popover.module').then( m => m.ReportPopoverPageModule)
  },
  {
    path: 'leave-ratings-experience',
    loadChildren: () => import('./pages/experience/leave-ratings-experience/leave-ratings-experience.module').then( m => m.LeaveRatingsExperiencePageModule)
  },
  {
    path: 'ratings-experience',
    loadChildren: () => import('./pages/experience/ratings-experience/ratings-experience.module').then( m => m.RatingsExperiencePageModule)
  },
  {
    path: 'ratings-experience-assistant',
    loadChildren: () => import('./pages/experience/ratings-experience-assistant/ratings-experience-assistant.module').then( m => m.RatingsExperienceAssistantPageModule)
  },
  {
    path: 'leave-ratings-experience-assistant',
    loadChildren: () => import('./pages/experience/leave-ratings-experience-assistant/leave-ratings-experience-assistant.module').then( m => m.LeaveRatingsExperienceAssistantPageModule)
  },
  {
    path: 'selectlang',
    loadChildren: () => import('./pages/selectlang/selectlang.module').then( m => m.SelectlangPageModule)
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
