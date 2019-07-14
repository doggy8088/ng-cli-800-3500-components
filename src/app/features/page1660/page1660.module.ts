import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1660Component } from './page1660.component';

@NgModule({
  declarations: [Page1660Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1660Component }])],
  exports: [Page1660Component]
})
export class Page1660Module {}
