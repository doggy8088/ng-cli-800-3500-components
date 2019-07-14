import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0769Component } from './page0769.component';

@NgModule({
  declarations: [Page0769Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0769Component }])],
  exports: [Page0769Component]
})
export class Page0769Module {}
