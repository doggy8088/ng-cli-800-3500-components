import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0270Component } from './page0270.component';

@NgModule({
  declarations: [Page0270Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0270Component }])],
  exports: [Page0270Component]
})
export class Page0270Module {}
