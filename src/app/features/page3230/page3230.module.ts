import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3230Component } from './page3230.component';

@NgModule({
  declarations: [Page3230Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3230Component }])],
  exports: [Page3230Component]
})
export class Page3230Module {}
