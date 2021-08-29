import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesRoutingModule } from './cases-routing.module';
import { MarketingComponent } from './marketing/marketing.component';
import { LandingComponent } from './landing/landing.component';
import { BusinessComponent } from './business/business.component';
import { StoreComponent } from './store/store.component';
import { NavModule } from '../shared/nav/nav.module';

@NgModule({
  declarations: [
    MarketingComponent,
    LandingComponent,
    BusinessComponent,
    StoreComponent,
  ],
  imports: [CommonModule, CasesRoutingModule, NavModule],
})
export class CasesModule {}
