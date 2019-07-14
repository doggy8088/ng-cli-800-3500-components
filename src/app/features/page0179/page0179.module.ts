import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0179Component } from './page0179.component';

@NgModule({
  declarations: [Page0179Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0179Component }])],
  exports: [Page0179Component]
})
export class Page0179Module {}
