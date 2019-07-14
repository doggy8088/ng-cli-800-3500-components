import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1252Component } from './page1252.component';

@NgModule({
  declarations: [Page1252Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1252Component }])],
  exports: [Page1252Component]
})
export class Page1252Module {}
