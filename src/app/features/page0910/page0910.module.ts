import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0910Component } from './page0910.component';

@NgModule({
  declarations: [Page0910Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0910Component }])],
  exports: [Page0910Component]
})
export class Page0910Module {}
