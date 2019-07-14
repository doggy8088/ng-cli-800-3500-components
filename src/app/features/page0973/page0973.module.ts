import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0973Component } from './page0973.component';

@NgModule({
  declarations: [Page0973Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0973Component }])],
  exports: [Page0973Component]
})
export class Page0973Module {}
