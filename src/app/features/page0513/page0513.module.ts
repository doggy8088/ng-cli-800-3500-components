import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0513Component } from './page0513.component';

@NgModule({
  declarations: [Page0513Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0513Component }])],
  exports: [Page0513Component]
})
export class Page0513Module {}
