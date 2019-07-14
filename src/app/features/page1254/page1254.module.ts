import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1254Component } from './page1254.component';

@NgModule({
  declarations: [Page1254Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1254Component }])],
  exports: [Page1254Component]
})
export class Page1254Module {}
