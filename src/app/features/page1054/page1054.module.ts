import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1054Component } from './page1054.component';

@NgModule({
  declarations: [Page1054Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1054Component }])],
  exports: [Page1054Component]
})
export class Page1054Module {}
