import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0669Component } from './page0669.component';

@NgModule({
  declarations: [Page0669Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0669Component }])],
  exports: [Page0669Component]
})
export class Page0669Module {}
