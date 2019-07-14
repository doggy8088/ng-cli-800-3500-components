import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1239Component } from './page1239.component';

@NgModule({
  declarations: [Page1239Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1239Component }])],
  exports: [Page1239Component]
})
export class Page1239Module {}
