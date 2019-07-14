import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0040Component } from './page0040.component';

@NgModule({
  declarations: [Page0040Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0040Component }])],
  exports: [Page0040Component]
})
export class Page0040Module {}
