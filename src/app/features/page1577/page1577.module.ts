import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1577Component } from './page1577.component';

@NgModule({
  declarations: [Page1577Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1577Component }])],
  exports: [Page1577Component]
})
export class Page1577Module {}
