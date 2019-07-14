import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1618Component } from './page1618.component';

@NgModule({
  declarations: [Page1618Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1618Component }])],
  exports: [Page1618Component]
})
export class Page1618Module {}
