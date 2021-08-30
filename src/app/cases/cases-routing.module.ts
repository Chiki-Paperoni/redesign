import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { LandingComponent } from './landing/landing.component';
import { MarketingComponent } from './marketing/marketing.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: 'marketing', component: MarketingComponent },
      { path: 'business', component: BusinessComponent },
      { path: 'store', component: StoreComponent },
      { path: 'landing', component: LandingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasesRoutingModule {}
