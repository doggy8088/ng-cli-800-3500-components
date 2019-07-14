import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3321Component } from './page3321.component';

@NgModule({
  declarations: [Page3321Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3321Component }])],
  exports: [Page3321Component]
})
export class Page3321Module {}
