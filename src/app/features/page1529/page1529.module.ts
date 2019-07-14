import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1529Component } from './page1529.component';

@NgModule({
  declarations: [Page1529Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1529Component }])],
  exports: [Page1529Component]
})
export class Page1529Module {}
