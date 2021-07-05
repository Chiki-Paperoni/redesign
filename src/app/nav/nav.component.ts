import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isPopupShown = false;
  constructor() {}

  ngOnInit(): void {
    console.log(this.isPopupShown);
  }

  showPopup(): void {
    this.isPopupShown = true;
    console.log(this.isPopupShown);
    document.body.style.overflow = 'hidden';
  }
  hidePopup(): void {
    this.isPopupShown = false;
    document.body.style.overflow = '';
  }
}
