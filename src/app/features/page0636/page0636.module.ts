import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0636Component } from './page0636.component';

@NgModule({
  declarations: [Page0636Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0636Component }])],
  exports: [Page0636Component]
})
export class Page0636Module {}
