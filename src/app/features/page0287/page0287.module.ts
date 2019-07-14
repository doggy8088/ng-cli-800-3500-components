import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0287Component } from './page0287.component';

@NgModule({
  declarations: [Page0287Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0287Component }])],
  exports: [Page0287Component]
})
export class Page0287Module {}
