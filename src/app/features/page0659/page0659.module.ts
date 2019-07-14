import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0659Component } from './page0659.component';

@NgModule({
  declarations: [Page0659Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0659Component }])],
  exports: [Page0659Component]
})
export class Page0659Module {}
