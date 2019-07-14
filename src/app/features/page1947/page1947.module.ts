import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1947Component } from './page1947.component';

@NgModule({
  declarations: [Page1947Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1947Component }])],
  exports: [Page1947Component]
})
export class Page1947Module {}
