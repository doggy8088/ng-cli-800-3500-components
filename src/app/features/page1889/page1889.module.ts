import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1889Component } from './page1889.component';

@NgModule({
  declarations: [Page1889Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1889Component }])],
  exports: [Page1889Component]
})
export class Page1889Module {}
