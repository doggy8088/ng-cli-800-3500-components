import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0776Component } from './page0776.component';

@NgModule({
  declarations: [Page0776Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0776Component }])],
  exports: [Page0776Component]
})
export class Page0776Module {}
