import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0938Component } from './page0938.component';

@NgModule({
  declarations: [Page0938Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0938Component }])],
  exports: [Page0938Component]
})
export class Page0938Module {}
