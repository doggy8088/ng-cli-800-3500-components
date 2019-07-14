import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0527Component } from './page0527.component';

@NgModule({
  declarations: [Page0527Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0527Component }])],
  exports: [Page0527Component]
})
export class Page0527Module {}
