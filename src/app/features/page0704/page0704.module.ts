import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0704Component } from './page0704.component';

@NgModule({
  declarations: [Page0704Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0704Component }])],
  exports: [Page0704Component]
})
export class Page0704Module {}
