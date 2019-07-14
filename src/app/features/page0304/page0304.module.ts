import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0304Component } from './page0304.component';

@NgModule({
  declarations: [Page0304Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0304Component }])],
  exports: [Page0304Component]
})
export class Page0304Module {}
