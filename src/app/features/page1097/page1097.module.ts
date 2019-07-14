import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1097Component } from './page1097.component';

@NgModule({
  declarations: [Page1097Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1097Component }])],
  exports: [Page1097Component]
})
export class Page1097Module {}
