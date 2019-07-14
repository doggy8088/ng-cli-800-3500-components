import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0644Component } from './page0644.component';

@NgModule({
  declarations: [Page0644Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0644Component }])],
  exports: [Page0644Component]
})
export class Page0644Module {}
