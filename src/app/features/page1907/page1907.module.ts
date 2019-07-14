import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1907Component } from './page1907.component';

@NgModule({
  declarations: [Page1907Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1907Component }])],
  exports: [Page1907Component]
})
export class Page1907Module {}
