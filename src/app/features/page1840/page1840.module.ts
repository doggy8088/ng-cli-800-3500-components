import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1840Component } from './page1840.component';

@NgModule({
  declarations: [Page1840Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1840Component }])],
  exports: [Page1840Component]
})
export class Page1840Module {}
