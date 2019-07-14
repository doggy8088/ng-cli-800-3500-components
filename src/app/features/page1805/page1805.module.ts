import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1805Component } from './page1805.component';

@NgModule({
  declarations: [Page1805Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1805Component }])],
  exports: [Page1805Component]
})
export class Page1805Module {}
