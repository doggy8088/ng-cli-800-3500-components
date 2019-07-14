import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1131Component } from './page1131.component';

@NgModule({
  declarations: [Page1131Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1131Component }])],
  exports: [Page1131Component]
})
export class Page1131Module {}
