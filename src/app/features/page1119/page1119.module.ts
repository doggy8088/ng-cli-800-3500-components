import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1119Component } from './page1119.component';

@NgModule({
  declarations: [Page1119Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1119Component }])],
  exports: [Page1119Component]
})
export class Page1119Module {}
