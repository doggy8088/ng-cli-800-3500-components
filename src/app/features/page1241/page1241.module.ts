import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1241Component } from './page1241.component';

@NgModule({
  declarations: [Page1241Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1241Component }])],
  exports: [Page1241Component]
})
export class Page1241Module {}
