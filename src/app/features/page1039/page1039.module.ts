import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1039Component } from './page1039.component';

@NgModule({
  declarations: [Page1039Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1039Component }])],
  exports: [Page1039Component]
})
export class Page1039Module {}
