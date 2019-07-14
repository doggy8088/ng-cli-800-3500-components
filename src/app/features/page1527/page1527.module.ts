import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1527Component } from './page1527.component';

@NgModule({
  declarations: [Page1527Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1527Component }])],
  exports: [Page1527Component]
})
export class Page1527Module {}
