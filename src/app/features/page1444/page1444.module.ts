import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1444Component } from './page1444.component';

@NgModule({
  declarations: [Page1444Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1444Component }])],
  exports: [Page1444Component]
})
export class Page1444Module {}
