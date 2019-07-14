import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0481Component } from './page0481.component';

@NgModule({
  declarations: [Page0481Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0481Component }])],
  exports: [Page0481Component]
})
export class Page0481Module {}
