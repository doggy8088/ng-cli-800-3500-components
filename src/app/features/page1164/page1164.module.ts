import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1164Component } from './page1164.component';

@NgModule({
  declarations: [Page1164Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1164Component }])],
  exports: [Page1164Component]
})
export class Page1164Module {}
