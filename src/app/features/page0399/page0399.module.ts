import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0399Component } from './page0399.component';

@NgModule({
  declarations: [Page0399Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0399Component }])],
  exports: [Page0399Component]
})
export class Page0399Module {}
