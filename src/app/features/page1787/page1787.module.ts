import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1787Component } from './page1787.component';

@NgModule({
  declarations: [Page1787Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1787Component }])],
  exports: [Page1787Component]
})
export class Page1787Module {}
