import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1323Component } from './page1323.component';

@NgModule({
  declarations: [Page1323Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1323Component }])],
  exports: [Page1323Component]
})
export class Page1323Module {}
