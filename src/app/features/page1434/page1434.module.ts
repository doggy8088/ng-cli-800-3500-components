import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1434Component } from './page1434.component';

@NgModule({
  declarations: [Page1434Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1434Component }])],
  exports: [Page1434Component]
})
export class Page1434Module {}
