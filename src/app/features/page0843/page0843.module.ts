import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0843Component } from './page0843.component';

@NgModule({
  declarations: [Page0843Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0843Component }])],
  exports: [Page0843Component]
})
export class Page0843Module {}
