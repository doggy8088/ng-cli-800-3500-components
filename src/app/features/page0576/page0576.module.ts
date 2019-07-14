import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0576Component } from './page0576.component';

@NgModule({
  declarations: [Page0576Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0576Component }])],
  exports: [Page0576Component]
})
export class Page0576Module {}
