import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0975Component } from './page0975.component';

@NgModule({
  declarations: [Page0975Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0975Component }])],
  exports: [Page0975Component]
})
export class Page0975Module {}
