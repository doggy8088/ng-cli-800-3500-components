import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1672Component } from './page1672.component';

@NgModule({
  declarations: [Page1672Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1672Component }])],
  exports: [Page1672Component]
})
export class Page1672Module {}
