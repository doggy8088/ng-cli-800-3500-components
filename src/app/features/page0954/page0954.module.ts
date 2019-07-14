import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0954Component } from './page0954.component';

@NgModule({
  declarations: [Page0954Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0954Component }])],
  exports: [Page0954Component]
})
export class Page0954Module {}
