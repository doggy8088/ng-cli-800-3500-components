import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0504Component } from './page0504.component';

@NgModule({
  declarations: [Page0504Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0504Component }])],
  exports: [Page0504Component]
})
export class Page0504Module {}
