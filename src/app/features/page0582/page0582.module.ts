import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0582Component } from './page0582.component';

@NgModule({
  declarations: [Page0582Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0582Component }])],
  exports: [Page0582Component]
})
export class Page0582Module {}
