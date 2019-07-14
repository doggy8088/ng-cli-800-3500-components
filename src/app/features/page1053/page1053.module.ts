import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1053Component } from './page1053.component';

@NgModule({
  declarations: [Page1053Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1053Component }])],
  exports: [Page1053Component]
})
export class Page1053Module {}
