import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1021Component } from './page1021.component';

@NgModule({
  declarations: [Page1021Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1021Component }])],
  exports: [Page1021Component]
})
export class Page1021Module {}
