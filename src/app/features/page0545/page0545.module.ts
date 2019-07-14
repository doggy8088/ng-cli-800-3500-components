import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0545Component } from './page0545.component';

@NgModule({
  declarations: [Page0545Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0545Component }])],
  exports: [Page0545Component]
})
export class Page0545Module {}
