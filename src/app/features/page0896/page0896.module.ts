import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0896Component } from './page0896.component';

@NgModule({
  declarations: [Page0896Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0896Component }])],
  exports: [Page0896Component]
})
export class Page0896Module {}
