import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0715Component } from './page0715.component';

@NgModule({
  declarations: [Page0715Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0715Component }])],
  exports: [Page0715Component]
})
export class Page0715Module {}
