import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1152Component } from './page1152.component';

@NgModule({
  declarations: [Page1152Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1152Component }])],
  exports: [Page1152Component]
})
export class Page1152Module {}
