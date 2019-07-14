import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1975Component } from './page1975.component';

@NgModule({
  declarations: [Page1975Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1975Component }])],
  exports: [Page1975Component]
})
export class Page1975Module {}
