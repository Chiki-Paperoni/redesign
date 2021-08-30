import { BrowserModule, TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { MainComponent } from './main/main.component';
import { TermsComponent } from './terms/terms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BriefComponent } from './brief/brief.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { translateBrowserLoaderFactory } from './translate/loaders/translate-browser.loader';
import { ClickPropagationStopDirective } from './shared/click-propagation-stop.directive';
import { DigitOnlyDirective } from './shared/digit-only.directive';
import { NavModule } from './shared/nav/nav.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    TermsComponent,
    NotfoundComponent,
    ClickPropagationStopDirective,
    DigitOnlyDirective,
    BriefComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),

    TransferHttpCacheModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateBrowserLoaderFactory, //added for server side translation
        deps: [HttpClient, TransferState],
      },
    }),

    FormsModule,
    ReactiveFormsModule,
    NavModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
