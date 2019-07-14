import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0709Component } from './page0709.component';

@NgModule({
  declarations: [Page0709Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0709Component }])],
  exports: [Page0709Component]
})
export class Page0709Module {}
