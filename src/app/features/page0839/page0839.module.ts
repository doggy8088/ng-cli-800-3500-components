import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0839Component } from './page0839.component';

@NgModule({
  declarations: [Page0839Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0839Component }])],
  exports: [Page0839Component]
})
export class Page0839Module {}
