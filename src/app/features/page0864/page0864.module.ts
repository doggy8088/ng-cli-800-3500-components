import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0864Component } from './page0864.component';

@NgModule({
  declarations: [Page0864Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0864Component }])],
  exports: [Page0864Component]
})
export class Page0864Module {}
