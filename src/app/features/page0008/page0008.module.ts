import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0008Component } from './page0008.component';

@NgModule({
  declarations: [Page0008Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0008Component }])],
  exports: [Page0008Component]
})
export class Page0008Module {}
