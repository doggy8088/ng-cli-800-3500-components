import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0928Component } from './page0928.component';

@NgModule({
  declarations: [Page0928Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0928Component }])],
  exports: [Page0928Component]
})
export class Page0928Module {}
