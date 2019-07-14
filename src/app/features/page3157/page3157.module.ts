import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3157Component } from './page3157.component';

@NgModule({
  declarations: [Page3157Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3157Component }])],
  exports: [Page3157Component]
})
export class Page3157Module {}
