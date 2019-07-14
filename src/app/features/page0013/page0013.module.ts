import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0013Component } from './page0013.component';

@NgModule({
  declarations: [Page0013Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0013Component }])],
  exports: [Page0013Component]
})
export class Page0013Module {}
