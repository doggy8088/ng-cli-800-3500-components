import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1319Component } from './page1319.component';

@NgModule({
  declarations: [Page1319Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1319Component }])],
  exports: [Page1319Component]
})
export class Page1319Module {}
