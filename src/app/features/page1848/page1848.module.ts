import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1848Component } from './page1848.component';

@NgModule({
  declarations: [Page1848Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1848Component }])],
  exports: [Page1848Component]
})
export class Page1848Module {}
