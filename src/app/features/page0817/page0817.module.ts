import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0817Component } from './page0817.component';

@NgModule({
  declarations: [Page0817Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0817Component }])],
  exports: [Page0817Component]
})
export class Page0817Module {}
