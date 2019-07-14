import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1708Component } from './page1708.component';

@NgModule({
  declarations: [Page1708Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1708Component }])],
  exports: [Page1708Component]
})
export class Page1708Module {}
