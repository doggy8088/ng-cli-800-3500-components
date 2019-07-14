import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1128Component } from './page1128.component';

@NgModule({
  declarations: [Page1128Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1128Component }])],
  exports: [Page1128Component]
})
export class Page1128Module {}
