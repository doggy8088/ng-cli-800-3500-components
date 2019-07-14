import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0680Component } from './page0680.component';

@NgModule({
  declarations: [Page0680Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0680Component }])],
  exports: [Page0680Component]
})
export class Page0680Module {}
