import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1747Component } from './page1747.component';

@NgModule({
  declarations: [Page1747Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1747Component }])],
  exports: [Page1747Component]
})
export class Page1747Module {}
