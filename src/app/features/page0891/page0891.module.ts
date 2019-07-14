import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0891Component } from './page0891.component';

@NgModule({
  declarations: [Page0891Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0891Component }])],
  exports: [Page0891Component]
})
export class Page0891Module {}
