import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0033Component } from './page0033.component';

@NgModule({
  declarations: [Page0033Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0033Component }])],
  exports: [Page0033Component]
})
export class Page0033Module {}
