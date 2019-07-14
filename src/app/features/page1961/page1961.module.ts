import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1961Component } from './page1961.component';

@NgModule({
  declarations: [Page1961Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1961Component }])],
  exports: [Page1961Component]
})
export class Page1961Module {}
