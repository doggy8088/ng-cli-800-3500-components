import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1697Component } from './page1697.component';

@NgModule({
  declarations: [Page1697Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1697Component }])],
  exports: [Page1697Component]
})
export class Page1697Module {}
