import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3209Component } from './page3209.component';

@NgModule({
  declarations: [Page3209Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3209Component }])],
  exports: [Page3209Component]
})
export class Page3209Module {}
