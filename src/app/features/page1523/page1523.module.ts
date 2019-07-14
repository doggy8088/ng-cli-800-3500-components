import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1523Component } from './page1523.component';

@NgModule({
  declarations: [Page1523Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1523Component }])],
  exports: [Page1523Component]
})
export class Page1523Module {}
