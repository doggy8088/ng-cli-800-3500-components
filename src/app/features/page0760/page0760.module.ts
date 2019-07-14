import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0760Component } from './page0760.component';

@NgModule({
  declarations: [Page0760Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0760Component }])],
  exports: [Page0760Component]
})
export class Page0760Module {}
