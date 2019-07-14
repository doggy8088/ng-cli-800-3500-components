import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0584Component } from './page0584.component';

@NgModule({
  declarations: [Page0584Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0584Component }])],
  exports: [Page0584Component]
})
export class Page0584Module {}
