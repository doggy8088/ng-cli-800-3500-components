import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1137Component } from './page1137.component';

@NgModule({
  declarations: [Page1137Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1137Component }])],
  exports: [Page1137Component]
})
export class Page1137Module {}
