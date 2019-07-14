import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0233Component } from './page0233.component';

@NgModule({
  declarations: [Page0233Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0233Component }])],
  exports: [Page0233Component]
})
export class Page0233Module {}
