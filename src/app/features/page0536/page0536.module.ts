import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0536Component } from './page0536.component';

@NgModule({
  declarations: [Page0536Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0536Component }])],
  exports: [Page0536Component]
})
export class Page0536Module {}
