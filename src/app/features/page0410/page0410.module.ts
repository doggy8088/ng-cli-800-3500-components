import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0410Component } from './page0410.component';

@NgModule({
  declarations: [Page0410Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0410Component }])],
  exports: [Page0410Component]
})
export class Page0410Module {}
