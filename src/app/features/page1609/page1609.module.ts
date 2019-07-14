import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1609Component } from './page1609.component';

@NgModule({
  declarations: [Page1609Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1609Component }])],
  exports: [Page1609Component]
})
export class Page1609Module {}
