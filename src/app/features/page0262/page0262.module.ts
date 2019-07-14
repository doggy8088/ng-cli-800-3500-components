import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0262Component } from './page0262.component';

@NgModule({
  declarations: [Page0262Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0262Component }])],
  exports: [Page0262Component]
})
export class Page0262Module {}
