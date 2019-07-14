import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1059Component } from './page1059.component';

@NgModule({
  declarations: [Page1059Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1059Component }])],
  exports: [Page1059Component]
})
export class Page1059Module {}
