import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1900Component } from './page1900.component';

@NgModule({
  declarations: [Page1900Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1900Component }])],
  exports: [Page1900Component]
})
export class Page1900Module {}
