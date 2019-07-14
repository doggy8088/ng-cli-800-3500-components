import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1730Component } from './page1730.component';

@NgModule({
  declarations: [Page1730Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1730Component }])],
  exports: [Page1730Component]
})
export class Page1730Module {}
