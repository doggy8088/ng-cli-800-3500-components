import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1675Component } from './page1675.component';

@NgModule({
  declarations: [Page1675Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1675Component }])],
  exports: [Page1675Component]
})
export class Page1675Module {}
