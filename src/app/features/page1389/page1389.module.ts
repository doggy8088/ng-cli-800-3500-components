import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1389Component } from './page1389.component';

@NgModule({
  declarations: [Page1389Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1389Component }])],
  exports: [Page1389Component]
})
export class Page1389Module {}
