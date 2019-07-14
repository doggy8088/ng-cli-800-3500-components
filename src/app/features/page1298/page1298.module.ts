import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1298Component } from './page1298.component';

@NgModule({
  declarations: [Page1298Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1298Component }])],
  exports: [Page1298Component]
})
export class Page1298Module {}
