import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0345Component } from './page0345.component';

@NgModule({
  declarations: [Page0345Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0345Component }])],
  exports: [Page0345Component]
})
export class Page0345Module {}
