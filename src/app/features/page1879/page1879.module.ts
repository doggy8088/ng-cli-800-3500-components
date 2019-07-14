import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1879Component } from './page1879.component';

@NgModule({
  declarations: [Page1879Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1879Component }])],
  exports: [Page1879Component]
})
export class Page1879Module {}
