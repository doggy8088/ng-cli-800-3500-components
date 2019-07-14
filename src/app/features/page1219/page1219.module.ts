import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1219Component } from './page1219.component';

@NgModule({
  declarations: [Page1219Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1219Component }])],
  exports: [Page1219Component]
})
export class Page1219Module {}
