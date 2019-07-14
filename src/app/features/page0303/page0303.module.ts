import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0303Component } from './page0303.component';

@NgModule({
  declarations: [Page0303Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0303Component }])],
  exports: [Page0303Component]
})
export class Page0303Module {}
