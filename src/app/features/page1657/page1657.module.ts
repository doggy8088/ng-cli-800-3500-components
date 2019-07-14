import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1657Component } from './page1657.component';

@NgModule({
  declarations: [Page1657Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1657Component }])],
  exports: [Page1657Component]
})
export class Page1657Module {}
