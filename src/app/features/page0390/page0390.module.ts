import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0390Component } from './page0390.component';

@NgModule({
  declarations: [Page0390Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0390Component }])],
  exports: [Page0390Component]
})
export class Page0390Module {}
