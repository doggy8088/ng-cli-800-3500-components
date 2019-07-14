import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0737Component } from './page0737.component';

@NgModule({
  declarations: [Page0737Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0737Component }])],
  exports: [Page0737Component]
})
export class Page0737Module {}
