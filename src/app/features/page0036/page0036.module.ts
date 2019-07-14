import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0036Component } from './page0036.component';

@NgModule({
  declarations: [Page0036Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0036Component }])],
  exports: [Page0036Component]
})
export class Page0036Module {}
