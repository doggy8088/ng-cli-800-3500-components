import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0491Component } from './page0491.component';

@NgModule({
  declarations: [Page0491Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0491Component }])],
  exports: [Page0491Component]
})
export class Page0491Module {}
