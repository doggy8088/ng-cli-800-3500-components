import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0551Component } from './page0551.component';

@NgModule({
  declarations: [Page0551Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0551Component }])],
  exports: [Page0551Component]
})
export class Page0551Module {}
