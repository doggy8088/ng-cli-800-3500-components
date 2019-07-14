import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1855Component } from './page1855.component';

@NgModule({
  declarations: [Page1855Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1855Component }])],
  exports: [Page1855Component]
})
export class Page1855Module {}
