import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0019Component } from './page0019.component';

@NgModule({
  declarations: [Page0019Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0019Component }])],
  exports: [Page0019Component]
})
export class Page0019Module {}
