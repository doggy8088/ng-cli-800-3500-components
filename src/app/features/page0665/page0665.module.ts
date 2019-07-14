import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0665Component } from './page0665.component';

@NgModule({
  declarations: [Page0665Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0665Component }])],
  exports: [Page0665Component]
})
export class Page0665Module {}
