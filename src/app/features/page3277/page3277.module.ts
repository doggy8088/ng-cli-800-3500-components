import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3277Component } from './page3277.component';

@NgModule({
  declarations: [Page3277Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3277Component }])],
  exports: [Page3277Component]
})
export class Page3277Module {}
