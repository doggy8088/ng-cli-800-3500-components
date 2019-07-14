import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1025Component } from './page1025.component';

@NgModule({
  declarations: [Page1025Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1025Component }])],
  exports: [Page1025Component]
})
export class Page1025Module {}
