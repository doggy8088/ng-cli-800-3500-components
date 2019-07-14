import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0117Component } from './page0117.component';

@NgModule({
  declarations: [Page0117Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0117Component }])],
  exports: [Page0117Component]
})
export class Page0117Module {}
