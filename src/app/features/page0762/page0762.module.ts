import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0762Component } from './page0762.component';

@NgModule({
  declarations: [Page0762Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0762Component }])],
  exports: [Page0762Component]
})
export class Page0762Module {}
