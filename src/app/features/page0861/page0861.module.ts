import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0861Component } from './page0861.component';

@NgModule({
  declarations: [Page0861Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0861Component }])],
  exports: [Page0861Component]
})
export class Page0861Module {}
