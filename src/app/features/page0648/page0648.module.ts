import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0648Component } from './page0648.component';

@NgModule({
  declarations: [Page0648Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0648Component }])],
  exports: [Page0648Component]
})
export class Page0648Module {}
