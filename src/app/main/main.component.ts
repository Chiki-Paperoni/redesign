import { AotSummaryResolver } from '@angular/compiler';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import * as AOS from 'aos';
import { Inject } from '@angular/core';
import { PostOrderService } from '../post-order.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, AfterViewInit {
  termsLink = '/terms';
  orderForm = this.formBuilder.group({
    name: '',
    phone: '',
  });

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private formBuilder: FormBuilder,
    private service: PostOrderService,
    public translate: TranslateService,
    router: Router
  ) {
    if (router.url.includes('/ua')) {
      this.switchUa();
    } else {
      this.switchRu();
    }
  }

  switchRu() {
    this.translate.use('ru');
    this.termsLink = '/terms';
  }
  switchUa() {
    this.translate.use('ua');
    this.termsLink = '/ua/terms';
  }

  ngOnInit(): void {
    this.orderForm.setValue({
      name: '',
      phone: '+380',
    });
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }
  onSubmit(): void {
    if (this.orderForm.valid) {
      this.service.postOrder(this.orderForm.value).subscribe((data) => {
        this.orderForm.setValue({
          name: '',
          phone: '+380',
        });
      });
      console.log('hello');
    }
  }
}
