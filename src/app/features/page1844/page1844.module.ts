import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1844Component } from './page1844.component';

@NgModule({
  declarations: [Page1844Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1844Component }])],
  exports: [Page1844Component]
})
export class Page1844Module {}
