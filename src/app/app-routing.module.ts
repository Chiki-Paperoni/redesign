import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BriefComponent } from './brief/brief.component';
import { MainComponent } from './main/main.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TermsUaComponent } from './terms-ua/terms-ua.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'ua', component: MainComponent },
  { path: 'ru', component: MainComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'ua/terms', component: TermsUaComponent },
  { path: 'brief', component: BriefComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      //anchorScrolling: 'enabled', replaced with ActiveRoute + scrollto on main component
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
