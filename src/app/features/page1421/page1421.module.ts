import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1421Component } from './page1421.component';

@NgModule({
  declarations: [Page1421Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1421Component }])],
  exports: [Page1421Component]
})
export class Page1421Module {}
