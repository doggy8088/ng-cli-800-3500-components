import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0320Component } from './page0320.component';

@NgModule({
  declarations: [Page0320Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0320Component }])],
  exports: [Page0320Component]
})
export class Page0320Module {}
