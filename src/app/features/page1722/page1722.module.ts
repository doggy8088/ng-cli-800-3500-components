import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1722Component } from './page1722.component';

@NgModule({
  declarations: [Page1722Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1722Component }])],
  exports: [Page1722Component]
})
export class Page1722Module {}
