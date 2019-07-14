import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0302Component } from './page0302.component';

@NgModule({
  declarations: [Page0302Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0302Component }])],
  exports: [Page0302Component]
})
export class Page0302Module {}
