import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0489Component } from './page0489.component';

@NgModule({
  declarations: [Page0489Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0489Component }])],
  exports: [Page0489Component]
})
export class Page0489Module {}
