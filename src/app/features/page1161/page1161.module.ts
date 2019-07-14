import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1161Component } from './page1161.component';

@NgModule({
  declarations: [Page1161Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1161Component }])],
  exports: [Page1161Component]
})
export class Page1161Module {}
