import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0476Component } from './page0476.component';

@NgModule({
  declarations: [Page0476Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0476Component }])],
  exports: [Page0476Component]
})
export class Page0476Module {}
