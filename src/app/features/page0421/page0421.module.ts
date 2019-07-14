import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0421Component } from './page0421.component';

@NgModule({
  declarations: [Page0421Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0421Component }])],
  exports: [Page0421Component]
})
export class Page0421Module {}
