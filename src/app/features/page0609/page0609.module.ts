import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0609Component } from './page0609.component';

@NgModule({
  declarations: [Page0609Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0609Component }])],
  exports: [Page0609Component]
})
export class Page0609Module {}
