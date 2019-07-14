import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0486Component } from './page0486.component';

@NgModule({
  declarations: [Page0486Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0486Component }])],
  exports: [Page0486Component]
})
export class Page0486Module {}
