import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1983Component } from './page1983.component';

@NgModule({
  declarations: [Page1983Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1983Component }])],
  exports: [Page1983Component]
})
export class Page1983Module {}
