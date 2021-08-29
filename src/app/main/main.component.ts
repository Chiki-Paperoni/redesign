import { AotSummaryResolver } from '@angular/compiler';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as AOS from 'aos';
import { Inject } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { PostOrderService } from '../shared/post-order.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, AfterViewInit {
  schoolProgress = false;
  termsLink = '/terms';
  orderForm = this.formBuilder.group({
    name: '',
    phone: '',
  });
  popupSuccess = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,

    private formBuilder: FormBuilder,
    private service: PostOrderService,
    public translate: TranslateService,
    public router: Router,
    private activeRoute: ActivatedRoute
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
    //Do this only in browser
    if (isPlatformBrowser(this.platformId)) {
      //ENABLE AOS ANIMATIONS
      AOS.init();
      //SCROOL TO FRAGMENT
      this.activeRoute.fragment.subscribe((fragment: string) => {
        this.scrollToAnchor(fragment);
      });
    }
  }
  onSubmit(): void {
    if (this.orderForm.valid) {
      const result = `Заказ\nИмя: ${this.orderForm.value.name}\nНомер: ${this.orderForm.value.phone}`;
      this.service.post(result).subscribe((data) => {
        this.orderForm.setValue({
          name: '',
          phone: '+380',
        });
        this.popupSuccess = true;
      });
    }
  }

  scrollToAnchor(location: string, wait = 0): void {
    //YOU CANT USE THIS LINE WITH SSR(NO document on server) Use platformId, like in sample above
    const element = document.querySelector('#' + location);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }, wait);
    }
  }
}
