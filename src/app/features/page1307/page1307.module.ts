import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1307Component } from './page1307.component';

@NgModule({
  declarations: [Page1307Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1307Component }])],
  exports: [Page1307Component]
})
export class Page1307Module {}
