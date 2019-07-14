import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0739Component } from './page0739.component';

@NgModule({
  declarations: [Page0739Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0739Component }])],
  exports: [Page0739Component]
})
export class Page0739Module {}
