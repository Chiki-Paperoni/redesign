import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PostOrderService } from '../post-order.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isPopupShown = false;
  popupSuccess = false;
  mobileBgStyle = '';
  mobileMenuStyle = '';

  orderForm = this.formBuilder.group({
    name: '',
    phone: '',
  });
  constructor(
    private formBuilder: FormBuilder,
    private service: PostOrderService,
    public translate: TranslateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.orderForm.setValue({
      name: '',
      phone: '+380',
    });
  }
  scroll(el: any) {
    if (typeof el == 'string') {
      this.router.navigateByUrl(el);
    } else {
      el.scrollIntoView(true, { block: 'start', behavior: 'smooth' });
    }
  }
  TogleMobileMenu(): void {
    if (this.mobileBgStyle === '') {
      document.body.style.overflow = 'hidden';
      this.mobileBgStyle =
        'background-color: #2c2431;min-height:100vh;position: fixed;right: 0;left: 0;z-index: 9999;overflow:auto';
      this.mobileMenuStyle = 'display:flex;';
    } else {
      this.mobileBgStyle = '';
      document.body.style.overflow = '';
      this.mobileMenuStyle = '';
    }
  }

  showPopup(): void {
    this.isPopupShown = true;
    document.body.style.overflow = 'hidden';
  }
  hidePopup(): void {
    this.isPopupShown = false;
    document.body.style.overflow = '';
  }
  switchRu() {
    this.translate.use('ru');
  }
  switchUa() {
    this.translate.use('ua');
  }
  onSubmit(): void {
    if (this.orderForm.valid) {
      const result = `Заказ\nИмя: ${this.orderForm.value.name}\nНомер: ${this.orderForm.value.phone}`;
      this.service.post(result).subscribe((data) => {
        this.orderForm.setValue({
          name: '',
          phone: '+380',
        });
        this.isPopupShown = false;
        this.popupSuccess = true;
        document.body.style.overflow = '';
      });
    }
  }
}
