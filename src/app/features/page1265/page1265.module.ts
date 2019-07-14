import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1265Component } from './page1265.component';

@NgModule({
  declarations: [Page1265Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1265Component }])],
  exports: [Page1265Component]
})
export class Page1265Module {}
