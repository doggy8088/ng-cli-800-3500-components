import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0497Component } from './page0497.component';

@NgModule({
  declarations: [Page0497Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0497Component }])],
  exports: [Page0497Component]
})
export class Page0497Module {}
