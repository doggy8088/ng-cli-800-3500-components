import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0099Component } from './page0099.component';

@NgModule({
  declarations: [Page0099Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0099Component }])],
  exports: [Page0099Component]
})
export class Page0099Module {}
