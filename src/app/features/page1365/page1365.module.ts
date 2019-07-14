import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1365Component } from './page1365.component';

@NgModule({
  declarations: [Page1365Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1365Component }])],
  exports: [Page1365Component]
})
export class Page1365Module {}
