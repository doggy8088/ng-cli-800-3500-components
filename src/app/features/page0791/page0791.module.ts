import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0791Component } from './page0791.component';

@NgModule({
  declarations: [Page0791Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0791Component }])],
  exports: [Page0791Component]
})
export class Page0791Module {}
