import { AotSummaryResolver } from '@angular/compiler';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
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
  orderForm = this.formBuilder.group({
    name: '',
    phone: '',
  });

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private formBuilder: FormBuilder,
    private service: PostOrderService
  ) {}

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
    this.service.postOrder(this.orderForm.value).subscribe((data) => {
      this.orderForm.setValue({
        name: '',
        phone: '+380',
      });
    });
  }
}
