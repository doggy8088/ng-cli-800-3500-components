import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3457Component } from './page3457.component';

@NgModule({
  declarations: [Page3457Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3457Component }])],
  exports: [Page3457Component]
})
export class Page3457Module {}
