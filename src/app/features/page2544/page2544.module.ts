import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2544Component } from './page2544.component';

@NgModule({
  declarations: [Page2544Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2544Component }])],
  exports: [Page2544Component]
})
export class Page2544Module {}
