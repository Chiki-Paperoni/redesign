import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-terms-ua',
  templateUrl: './terms-ua.component.html',
  styleUrls: ['./terms-ua.component.scss'],
})
export class TermsUaComponent implements OnInit {
  constructor(router: Router, public translate: TranslateService) {
    this.translate.use('ua');
  }

  ngOnInit(): void {}
}
