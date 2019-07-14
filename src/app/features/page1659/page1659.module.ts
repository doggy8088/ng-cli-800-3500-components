import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1659Component } from './page1659.component';

@NgModule({
  declarations: [Page1659Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1659Component }])],
  exports: [Page1659Component]
})
export class Page1659Module {}
