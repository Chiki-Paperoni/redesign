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
  orderForm = this.formBuilder.group({
    name: '',
    phone: '',
  });
  constructor(
    private formBuilder: FormBuilder,
    private service: PostOrderService
  ) {}

  ngOnInit(): void {
    console.log(this.isPopupShown);
    this.orderForm.setValue({
      name: '',
      phone: '+380',
    });
  }

  showPopup(): void {
    this.isPopupShown = true;
    document.body.style.overflow = 'hidden';
  }
  hidePopup(): void {
    this.isPopupShown = false;
    document.body.style.overflow = '';
  }
  checkChange(e: InputEvent) {
    console.log(e);
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
