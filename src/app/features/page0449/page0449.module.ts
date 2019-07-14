import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0449Component } from './page0449.component';

@NgModule({
  declarations: [Page0449Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0449Component }])],
  exports: [Page0449Component]
})
export class Page0449Module {}
