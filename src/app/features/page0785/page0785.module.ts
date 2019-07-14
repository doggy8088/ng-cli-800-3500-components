import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0785Component } from './page0785.component';

@NgModule({
  declarations: [Page0785Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0785Component }])],
  exports: [Page0785Component]
})
export class Page0785Module {}
