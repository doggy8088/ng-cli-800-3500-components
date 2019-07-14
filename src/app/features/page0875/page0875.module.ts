import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0875Component } from './page0875.component';

@NgModule({
  declarations: [Page0875Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0875Component }])],
  exports: [Page0875Component]
})
export class Page0875Module {}
