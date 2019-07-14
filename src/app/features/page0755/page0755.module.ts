import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0755Component } from './page0755.component';

@NgModule({
  declarations: [Page0755Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0755Component }])],
  exports: [Page0755Component]
})
export class Page0755Module {}
