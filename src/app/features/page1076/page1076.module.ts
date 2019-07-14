import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1076Component } from './page1076.component';

@NgModule({
  declarations: [Page1076Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1076Component }])],
  exports: [Page1076Component]
})
export class Page1076Module {}
