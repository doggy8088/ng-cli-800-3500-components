import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3386Component } from './page3386.component';

@NgModule({
  declarations: [Page3386Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3386Component }])],
  exports: [Page3386Component]
})
export class Page3386Module {}
