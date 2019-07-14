import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1375Component } from './page1375.component';

@NgModule({
  declarations: [Page1375Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1375Component }])],
  exports: [Page1375Component]
})
export class Page1375Module {}
