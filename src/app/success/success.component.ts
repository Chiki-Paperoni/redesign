import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent implements OnInit {
  @Output() closeSucccess = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  close(): void {
    this.closeSucccess.emit(false);
  }
}
