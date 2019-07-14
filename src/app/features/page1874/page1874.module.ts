import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1874Component } from './page1874.component';

@NgModule({
  declarations: [Page1874Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1874Component }])],
  exports: [Page1874Component]
})
export class Page1874Module {}
