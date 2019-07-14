import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0541Component } from './page0541.component';

@NgModule({
  declarations: [Page0541Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0541Component }])],
  exports: [Page0541Component]
})
export class Page0541Module {}
