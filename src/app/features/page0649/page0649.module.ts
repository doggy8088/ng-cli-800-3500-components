import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0649Component } from './page0649.component';

@NgModule({
  declarations: [Page0649Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0649Component }])],
  exports: [Page0649Component]
})
export class Page0649Module {}
