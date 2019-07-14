import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0398Component } from './page0398.component';

@NgModule({
  declarations: [Page0398Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0398Component }])],
  exports: [Page0398Component]
})
export class Page0398Module {}
