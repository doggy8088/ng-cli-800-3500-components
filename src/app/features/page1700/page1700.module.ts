import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1700Component } from './page1700.component';

@NgModule({
  declarations: [Page1700Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1700Component }])],
  exports: [Page1700Component]
})
export class Page1700Module {}
