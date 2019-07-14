import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0722Component } from './page0722.component';

@NgModule({
  declarations: [Page0722Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0722Component }])],
  exports: [Page0722Component]
})
export class Page0722Module {}
