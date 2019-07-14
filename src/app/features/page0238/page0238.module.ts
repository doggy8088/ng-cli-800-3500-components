import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0238Component } from './page0238.component';

@NgModule({
  declarations: [Page0238Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0238Component }])],
  exports: [Page0238Component]
})
export class Page0238Module {}
