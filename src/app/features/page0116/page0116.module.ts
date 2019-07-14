import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0116Component } from './page0116.component';

@NgModule({
  declarations: [Page0116Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0116Component }])],
  exports: [Page0116Component]
})
export class Page0116Module {}
