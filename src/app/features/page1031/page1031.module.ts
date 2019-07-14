import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1031Component } from './page1031.component';

@NgModule({
  declarations: [Page1031Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1031Component }])],
  exports: [Page1031Component]
})
export class Page1031Module {}
