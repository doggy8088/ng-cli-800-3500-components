import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0772Component } from './page0772.component';

@NgModule({
  declarations: [Page0772Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0772Component }])],
  exports: [Page0772Component]
})
export class Page0772Module {}
