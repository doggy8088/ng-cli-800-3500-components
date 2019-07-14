import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0773Component } from './page0773.component';

@NgModule({
  declarations: [Page0773Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0773Component }])],
  exports: [Page0773Component]
})
export class Page0773Module {}
