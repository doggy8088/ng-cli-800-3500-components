import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3185Component } from './page3185.component';

@NgModule({
  declarations: [Page3185Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3185Component }])],
  exports: [Page3185Component]
})
export class Page3185Module {}
