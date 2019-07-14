import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1467Component } from './page1467.component';

@NgModule({
  declarations: [Page1467Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1467Component }])],
  exports: [Page1467Component]
})
export class Page1467Module {}
