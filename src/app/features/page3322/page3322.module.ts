import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3322Component } from './page3322.component';

@NgModule({
  declarations: [Page3322Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3322Component }])],
  exports: [Page3322Component]
})
export class Page3322Module {}
