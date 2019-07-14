import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0927Component } from './page0927.component';

@NgModule({
  declarations: [Page0927Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0927Component }])],
  exports: [Page0927Component]
})
export class Page0927Module {}
