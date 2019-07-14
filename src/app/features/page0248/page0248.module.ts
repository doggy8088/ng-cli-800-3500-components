import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0248Component } from './page0248.component';

@NgModule({
  declarations: [Page0248Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0248Component }])],
  exports: [Page0248Component]
})
export class Page0248Module {}
