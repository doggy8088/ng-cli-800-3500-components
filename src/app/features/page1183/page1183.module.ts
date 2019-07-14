import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1183Component } from './page1183.component';

@NgModule({
  declarations: [Page1183Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1183Component }])],
  exports: [Page1183Component]
})
export class Page1183Module {}
