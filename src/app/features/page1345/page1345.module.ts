import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1345Component } from './page1345.component';

@NgModule({
  declarations: [Page1345Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1345Component }])],
  exports: [Page1345Component]
})
export class Page1345Module {}
