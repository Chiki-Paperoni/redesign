import { AotSummaryResolver } from '@angular/compiler';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
  ngAfterViewInit() {
    AOS.init();
  }
}
