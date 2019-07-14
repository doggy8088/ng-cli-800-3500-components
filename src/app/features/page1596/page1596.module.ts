import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1596Component } from './page1596.component';

@NgModule({
  declarations: [Page1596Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1596Component }])],
  exports: [Page1596Component]
})
export class Page1596Module {}
