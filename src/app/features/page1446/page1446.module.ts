import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1446Component } from './page1446.component';

@NgModule({
  declarations: [Page1446Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1446Component }])],
  exports: [Page1446Component]
})
export class Page1446Module {}
