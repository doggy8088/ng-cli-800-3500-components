import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0734Component } from './page0734.component';

@NgModule({
  declarations: [Page0734Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0734Component }])],
  exports: [Page0734Component]
})
export class Page0734Module {}
