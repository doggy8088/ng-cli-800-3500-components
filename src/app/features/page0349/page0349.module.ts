import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0349Component } from './page0349.component';

@NgModule({
  declarations: [Page0349Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0349Component }])],
  exports: [Page0349Component]
})
export class Page0349Module {}
