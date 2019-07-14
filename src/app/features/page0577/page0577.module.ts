import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0577Component } from './page0577.component';

@NgModule({
  declarations: [Page0577Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0577Component }])],
  exports: [Page0577Component]
})
export class Page0577Module {}
