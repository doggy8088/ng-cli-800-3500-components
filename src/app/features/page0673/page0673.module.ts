import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0673Component } from './page0673.component';

@NgModule({
  declarations: [Page0673Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0673Component }])],
  exports: [Page0673Component]
})
export class Page0673Module {}
