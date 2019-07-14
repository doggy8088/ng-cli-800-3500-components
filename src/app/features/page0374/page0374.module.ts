import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0374Component } from './page0374.component';

@NgModule({
  declarations: [Page0374Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0374Component }])],
  exports: [Page0374Component]
})
export class Page0374Module {}
