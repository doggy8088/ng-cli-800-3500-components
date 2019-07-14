import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1693Component } from './page1693.component';

@NgModule({
  declarations: [Page1693Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1693Component }])],
  exports: [Page1693Component]
})
export class Page1693Module {}
