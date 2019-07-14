import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1941Component } from './page1941.component';

@NgModule({
  declarations: [Page1941Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1941Component }])],
  exports: [Page1941Component]
})
export class Page1941Module {}
