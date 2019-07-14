import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0806Component } from './page0806.component';

@NgModule({
  declarations: [Page0806Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0806Component }])],
  exports: [Page0806Component]
})
export class Page0806Module {}
