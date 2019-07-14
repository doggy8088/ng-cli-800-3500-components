import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0842Component } from './page0842.component';

@NgModule({
  declarations: [Page0842Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0842Component }])],
  exports: [Page0842Component]
})
export class Page0842Module {}
