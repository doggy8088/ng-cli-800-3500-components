import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0208Component } from './page0208.component';

@NgModule({
  declarations: [Page0208Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0208Component }])],
  exports: [Page0208Component]
})
export class Page0208Module {}
