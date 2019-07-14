import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0395Component } from './page0395.component';

@NgModule({
  declarations: [Page0395Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0395Component }])],
  exports: [Page0395Component]
})
export class Page0395Module {}
