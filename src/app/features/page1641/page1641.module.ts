import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1641Component } from './page1641.component';

@NgModule({
  declarations: [Page1641Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1641Component }])],
  exports: [Page1641Component]
})
export class Page1641Module {}
