import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0354Component } from './page0354.component';

@NgModule({
  declarations: [Page0354Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0354Component }])],
  exports: [Page0354Component]
})
export class Page0354Module {}
