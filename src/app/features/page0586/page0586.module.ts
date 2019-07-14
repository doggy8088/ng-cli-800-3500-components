import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0586Component } from './page0586.component';

@NgModule({
  declarations: [Page0586Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0586Component }])],
  exports: [Page0586Component]
})
export class Page0586Module {}
