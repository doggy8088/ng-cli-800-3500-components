import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0084Component } from './page0084.component';

@NgModule({
  declarations: [Page0084Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0084Component }])],
  exports: [Page0084Component]
})
export class Page0084Module {}
