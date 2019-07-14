import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1235Component } from './page1235.component';

@NgModule({
  declarations: [Page1235Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1235Component }])],
  exports: [Page1235Component]
})
export class Page1235Module {}
