import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0069Component } from './page0069.component';

@NgModule({
  declarations: [Page0069Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0069Component }])],
  exports: [Page0069Component]
})
export class Page0069Module {}
