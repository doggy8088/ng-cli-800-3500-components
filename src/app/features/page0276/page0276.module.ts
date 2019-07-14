import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0276Component } from './page0276.component';

@NgModule({
  declarations: [Page0276Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0276Component }])],
  exports: [Page0276Component]
})
export class Page0276Module {}
