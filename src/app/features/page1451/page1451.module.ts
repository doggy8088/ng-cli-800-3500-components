import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1451Component } from './page1451.component';

@NgModule({
  declarations: [Page1451Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1451Component }])],
  exports: [Page1451Component]
})
export class Page1451Module {}
