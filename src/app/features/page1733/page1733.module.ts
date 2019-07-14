import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1733Component } from './page1733.component';

@NgModule({
  declarations: [Page1733Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1733Component }])],
  exports: [Page1733Component]
})
export class Page1733Module {}
