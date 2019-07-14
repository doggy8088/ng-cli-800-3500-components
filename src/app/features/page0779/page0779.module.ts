import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0779Component } from './page0779.component';

@NgModule({
  declarations: [Page0779Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0779Component }])],
  exports: [Page0779Component]
})
export class Page0779Module {}
