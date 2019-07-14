import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0942Component } from './page0942.component';

@NgModule({
  declarations: [Page0942Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0942Component }])],
  exports: [Page0942Component]
})
export class Page0942Module {}
