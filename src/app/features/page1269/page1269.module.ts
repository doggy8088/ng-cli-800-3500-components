import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1269Component } from './page1269.component';

@NgModule({
  declarations: [Page1269Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1269Component }])],
  exports: [Page1269Component]
})
export class Page1269Module {}
