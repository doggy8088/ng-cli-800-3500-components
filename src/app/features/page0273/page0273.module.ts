import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0273Component } from './page0273.component';

@NgModule({
  declarations: [Page0273Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0273Component }])],
  exports: [Page0273Component]
})
export class Page0273Module {}
