import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1779Component } from './page1779.component';

@NgModule({
  declarations: [Page1779Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1779Component }])],
  exports: [Page1779Component]
})
export class Page1779Module {}
