import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0903Component } from './page0903.component';

@NgModule({
  declarations: [Page0903Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0903Component }])],
  exports: [Page0903Component]
})
export class Page0903Module {}
