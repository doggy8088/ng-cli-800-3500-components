import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0838Component } from './page0838.component';

@NgModule({
  declarations: [Page0838Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0838Component }])],
  exports: [Page0838Component]
})
export class Page0838Module {}
