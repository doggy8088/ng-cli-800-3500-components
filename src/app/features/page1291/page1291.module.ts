import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1291Component } from './page1291.component';

@NgModule({
  declarations: [Page1291Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1291Component }])],
  exports: [Page1291Component]
})
export class Page1291Module {}
