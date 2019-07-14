import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0701Component } from './page0701.component';

@NgModule({
  declarations: [Page0701Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0701Component }])],
  exports: [Page0701Component]
})
export class Page0701Module {}
