import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1513Component } from './page1513.component';

@NgModule({
  declarations: [Page1513Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1513Component }])],
  exports: [Page1513Component]
})
export class Page1513Module {}
