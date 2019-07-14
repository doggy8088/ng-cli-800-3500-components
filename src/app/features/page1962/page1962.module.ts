import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1962Component } from './page1962.component';

@NgModule({
  declarations: [Page1962Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1962Component }])],
  exports: [Page1962Component]
})
export class Page1962Module {}
