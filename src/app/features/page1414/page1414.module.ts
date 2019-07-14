import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1414Component } from './page1414.component';

@NgModule({
  declarations: [Page1414Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1414Component }])],
  exports: [Page1414Component]
})
export class Page1414Module {}
