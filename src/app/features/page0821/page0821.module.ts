import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0821Component } from './page0821.component';

@NgModule({
  declarations: [Page0821Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0821Component }])],
  exports: [Page0821Component]
})
export class Page0821Module {}
