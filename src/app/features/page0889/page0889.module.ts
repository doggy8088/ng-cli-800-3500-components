import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0889Component } from './page0889.component';

@NgModule({
  declarations: [Page0889Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0889Component }])],
  exports: [Page0889Component]
})
export class Page0889Module {}
