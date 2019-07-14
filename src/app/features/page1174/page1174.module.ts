import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1174Component } from './page1174.component';

@NgModule({
  declarations: [Page1174Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1174Component }])],
  exports: [Page1174Component]
})
export class Page1174Module {}
