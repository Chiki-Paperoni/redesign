import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PostOrderService } from '../post-order.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isPopupShown = false;
  popupsSuccess = false;
  mobileBgStyle = '';
  mobileMenuStyle = '';

  orderForm = this.formBuilder.group({
    name: '',
    phone: '',
  });
  constructor(
    private formBuilder: FormBuilder,
    private service: PostOrderService
  ) {}

  ngOnInit(): void {
    this.orderForm.setValue({
      name: '',
      phone: '+380',
    });
  }
  TogleMobileMenu(): void {
    if (this.mobileBgStyle === '') {
      this.mobileBgStyle = 'background-color: #2c2431;min-height:100vh';
      document.body.style.overflow = 'hidden';

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
  onSubmit(): void {
    this.service.postOrder(this.orderForm.value).subscribe(
      (data) => {
        this.orderForm.setValue({
          name: '',
          phone: '+380',
        });
        this.popupsSuccess = true;
      },
      (error) => {}
    );
  }
}
