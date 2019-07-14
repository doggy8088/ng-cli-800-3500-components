import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0376Component } from './page0376.component';

@NgModule({
  declarations: [Page0376Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0376Component }])],
  exports: [Page0376Component]
})
export class Page0376Module {}
