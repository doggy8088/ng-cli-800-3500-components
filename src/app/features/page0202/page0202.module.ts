import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0202Component } from './page0202.component';

@NgModule({
  declarations: [Page0202Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0202Component }])],
  exports: [Page0202Component]
})
export class Page0202Module {}
