import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3168Component } from './page3168.component';

@NgModule({
  declarations: [Page3168Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3168Component }])],
  exports: [Page3168Component]
})
export class Page3168Module {}
