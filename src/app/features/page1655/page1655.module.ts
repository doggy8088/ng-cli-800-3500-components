import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1655Component } from './page1655.component';

@NgModule({
  declarations: [Page1655Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1655Component }])],
  exports: [Page1655Component]
})
export class Page1655Module {}
