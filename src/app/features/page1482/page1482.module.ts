import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1482Component } from './page1482.component';

@NgModule({
  declarations: [Page1482Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1482Component }])],
  exports: [Page1482Component]
})
export class Page1482Module {}
