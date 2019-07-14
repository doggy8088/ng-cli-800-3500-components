import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0120Component } from './page0120.component';

@NgModule({
  declarations: [Page0120Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0120Component }])],
  exports: [Page0120Component]
})
export class Page0120Module {}
