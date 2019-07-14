import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0175Component } from './page0175.component';

@NgModule({
  declarations: [Page0175Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0175Component }])],
  exports: [Page0175Component]
})
export class Page0175Module {}
