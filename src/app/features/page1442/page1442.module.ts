import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1442Component } from './page1442.component';

@NgModule({
  declarations: [Page1442Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1442Component }])],
  exports: [Page1442Component]
})
export class Page1442Module {}
