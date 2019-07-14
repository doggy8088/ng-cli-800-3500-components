import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1193Component } from './page1193.component';

@NgModule({
  declarations: [Page1193Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1193Component }])],
  exports: [Page1193Component]
})
export class Page1193Module {}
