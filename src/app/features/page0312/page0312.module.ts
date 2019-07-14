import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0312Component } from './page0312.component';

@NgModule({
  declarations: [Page0312Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0312Component }])],
  exports: [Page0312Component]
})
export class Page0312Module {}
