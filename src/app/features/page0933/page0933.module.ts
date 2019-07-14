import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0933Component } from './page0933.component';

@NgModule({
  declarations: [Page0933Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0933Component }])],
  exports: [Page0933Component]
})
export class Page0933Module {}
