import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0711Component } from './page0711.component';

@NgModule({
  declarations: [Page0711Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0711Component }])],
  exports: [Page0711Component]
})
export class Page0711Module {}
