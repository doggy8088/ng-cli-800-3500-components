import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0807Component } from './page0807.component';

@NgModule({
  declarations: [Page0807Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0807Component }])],
  exports: [Page0807Component]
})
export class Page0807Module {}
