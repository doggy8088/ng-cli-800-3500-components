import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0652Component } from './page0652.component';

@NgModule({
  declarations: [Page0652Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0652Component }])],
  exports: [Page0652Component]
})
export class Page0652Module {}
