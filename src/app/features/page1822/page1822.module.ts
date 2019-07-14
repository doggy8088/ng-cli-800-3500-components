import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1822Component } from './page1822.component';

@NgModule({
  declarations: [Page1822Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1822Component }])],
  exports: [Page1822Component]
})
export class Page1822Module {}
