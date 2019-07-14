import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1763Component } from './page1763.component';

@NgModule({
  declarations: [Page1763Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1763Component }])],
  exports: [Page1763Component]
})
export class Page1763Module {}
