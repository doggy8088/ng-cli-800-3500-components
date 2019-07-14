import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0456Component } from './page0456.component';

@NgModule({
  declarations: [Page0456Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0456Component }])],
  exports: [Page0456Component]
})
export class Page0456Module {}
