import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1143Component } from './page1143.component';

@NgModule({
  declarations: [Page1143Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1143Component }])],
  exports: [Page1143Component]
})
export class Page1143Module {}
