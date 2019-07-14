import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1396Component } from './page1396.component';

@NgModule({
  declarations: [Page1396Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1396Component }])],
  exports: [Page1396Component]
})
export class Page1396Module {}
