import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0416Component } from './page0416.component';

@NgModule({
  declarations: [Page0416Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0416Component }])],
  exports: [Page0416Component]
})
export class Page0416Module {}
