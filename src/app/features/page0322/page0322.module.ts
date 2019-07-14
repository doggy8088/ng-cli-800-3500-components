import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0322Component } from './page0322.component';

@NgModule({
  declarations: [Page0322Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0322Component }])],
  exports: [Page0322Component]
})
export class Page0322Module {}
