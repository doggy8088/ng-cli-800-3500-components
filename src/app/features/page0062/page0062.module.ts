import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0062Component } from './page0062.component';

@NgModule({
  declarations: [Page0062Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0062Component }])],
  exports: [Page0062Component]
})
export class Page0062Module {}
