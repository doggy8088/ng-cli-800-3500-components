import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0596Component } from './page0596.component';

@NgModule({
  declarations: [Page0596Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0596Component }])],
  exports: [Page0596Component]
})
export class Page0596Module {}
