import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0658Component } from './page0658.component';

@NgModule({
  declarations: [Page0658Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0658Component }])],
  exports: [Page0658Component]
})
export class Page0658Module {}
