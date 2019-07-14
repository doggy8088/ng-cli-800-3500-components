import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0706Component } from './page0706.component';

@NgModule({
  declarations: [Page0706Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0706Component }])],
  exports: [Page0706Component]
})
export class Page0706Module {}
