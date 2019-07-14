import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0949Component } from './page0949.component';

@NgModule({
  declarations: [Page0949Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0949Component }])],
  exports: [Page0949Component]
})
export class Page0949Module {}
