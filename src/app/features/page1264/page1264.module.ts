import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1264Component } from './page1264.component';

@NgModule({
  declarations: [Page1264Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1264Component }])],
  exports: [Page1264Component]
})
export class Page1264Module {}
