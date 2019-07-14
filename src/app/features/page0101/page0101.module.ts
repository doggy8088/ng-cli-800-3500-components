import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0101Component } from './page0101.component';

@NgModule({
  declarations: [Page0101Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0101Component }])],
  exports: [Page0101Component]
})
export class Page0101Module {}
