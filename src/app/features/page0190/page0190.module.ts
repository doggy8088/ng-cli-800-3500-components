import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0190Component } from './page0190.component';

@NgModule({
  declarations: [Page0190Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0190Component }])],
  exports: [Page0190Component]
})
export class Page0190Module {}
