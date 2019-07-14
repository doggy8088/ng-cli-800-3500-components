import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0433Component } from './page0433.component';

@NgModule({
  declarations: [Page0433Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0433Component }])],
  exports: [Page0433Component]
})
export class Page0433Module {}
