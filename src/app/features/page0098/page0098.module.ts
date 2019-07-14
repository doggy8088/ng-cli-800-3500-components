import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0098Component } from './page0098.component';

@NgModule({
  declarations: [Page0098Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0098Component }])],
  exports: [Page0098Component]
})
export class Page0098Module {}
