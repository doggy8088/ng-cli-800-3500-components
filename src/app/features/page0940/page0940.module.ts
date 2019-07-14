import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0940Component } from './page0940.component';

@NgModule({
  declarations: [Page0940Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0940Component }])],
  exports: [Page0940Component]
})
export class Page0940Module {}
