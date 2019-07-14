import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0389Component } from './page0389.component';

@NgModule({
  declarations: [Page0389Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0389Component }])],
  exports: [Page0389Component]
})
export class Page0389Module {}
