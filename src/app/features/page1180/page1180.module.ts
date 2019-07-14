import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1180Component } from './page1180.component';

@NgModule({
  declarations: [Page1180Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1180Component }])],
  exports: [Page1180Component]
})
export class Page1180Module {}
