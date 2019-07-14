import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1524Component } from './page1524.component';

@NgModule({
  declarations: [Page1524Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1524Component }])],
  exports: [Page1524Component]
})
export class Page1524Module {}
