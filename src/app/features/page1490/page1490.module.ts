import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1490Component } from './page1490.component';

@NgModule({
  declarations: [Page1490Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1490Component }])],
  exports: [Page1490Component]
})
export class Page1490Module {}
