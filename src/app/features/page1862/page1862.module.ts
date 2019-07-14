import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1862Component } from './page1862.component';

@NgModule({
  declarations: [Page1862Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1862Component }])],
  exports: [Page1862Component]
})
export class Page1862Module {}
