import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1967Component } from './page1967.component';

@NgModule({
  declarations: [Page1967Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1967Component }])],
  exports: [Page1967Component]
})
export class Page1967Module {}
