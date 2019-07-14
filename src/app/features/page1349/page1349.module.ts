import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1349Component } from './page1349.component';

@NgModule({
  declarations: [Page1349Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1349Component }])],
  exports: [Page1349Component]
})
export class Page1349Module {}
