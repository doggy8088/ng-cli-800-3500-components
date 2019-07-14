import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3216Component } from './page3216.component';

@NgModule({
  declarations: [Page3216Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3216Component }])],
  exports: [Page3216Component]
})
export class Page3216Module {}
