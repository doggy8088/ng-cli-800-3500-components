import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1343Component } from './page1343.component';

@NgModule({
  declarations: [Page1343Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1343Component }])],
  exports: [Page1343Component]
})
export class Page1343Module {}
