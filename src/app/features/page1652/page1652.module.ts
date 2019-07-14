import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1652Component } from './page1652.component';

@NgModule({
  declarations: [Page1652Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1652Component }])],
  exports: [Page1652Component]
})
export class Page1652Module {}
