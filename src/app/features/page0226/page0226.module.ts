import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0226Component } from './page0226.component';

@NgModule({
  declarations: [Page0226Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0226Component }])],
  exports: [Page0226Component]
})
export class Page0226Module {}
