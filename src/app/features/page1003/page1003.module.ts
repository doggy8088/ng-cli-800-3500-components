import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1003Component } from './page1003.component';

@NgModule({
  declarations: [Page1003Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1003Component }])],
  exports: [Page1003Component]
})
export class Page1003Module {}
