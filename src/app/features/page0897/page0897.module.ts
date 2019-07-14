import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0897Component } from './page0897.component';

@NgModule({
  declarations: [Page0897Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0897Component }])],
  exports: [Page0897Component]
})
export class Page0897Module {}
