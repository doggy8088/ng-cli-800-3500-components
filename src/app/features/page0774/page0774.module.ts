import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0774Component } from './page0774.component';

@NgModule({
  declarations: [Page0774Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0774Component }])],
  exports: [Page0774Component]
})
export class Page0774Module {}
