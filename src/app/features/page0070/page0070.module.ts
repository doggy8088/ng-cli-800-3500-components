import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0070Component } from './page0070.component';

@NgModule({
  declarations: [Page0070Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0070Component }])],
  exports: [Page0070Component]
})
export class Page0070Module {}
