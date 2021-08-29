import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { SuccessComponent } from '../success/success.component';

@NgModule({
  declarations: [NavComponent, SuccessComponent],

  exports: [NavComponent, SuccessComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    TranslateModule,
  ],
})
export class NavModule {}
