import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0156Component } from './page0156.component';

@NgModule({
  declarations: [Page0156Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0156Component }])],
  exports: [Page0156Component]
})
export class Page0156Module {}
