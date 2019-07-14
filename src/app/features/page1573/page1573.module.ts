import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1573Component } from './page1573.component';

@NgModule({
  declarations: [Page1573Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1573Component }])],
  exports: [Page1573Component]
})
export class Page1573Module {}
