import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0708Component } from './page0708.component';

@NgModule({
  declarations: [Page0708Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0708Component }])],
  exports: [Page0708Component]
})
export class Page0708Module {}
