import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0059Component } from './page0059.component';

@NgModule({
  declarations: [Page0059Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0059Component }])],
  exports: [Page0059Component]
})
export class Page0059Module {}
