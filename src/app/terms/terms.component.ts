import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TermsComponent implements OnInit {
  constructor(router: Router, public translate: TranslateService) {
    if (router.url.includes('/ua')) {
      this.switchUa();
    } else {
      this.switchRu();
    }
  }

  ngOnInit(): void {}
  switchRu() {
    this.translate.use('ru');
  }
  switchUa() {
    this.translate.use('ua');
  }
}
