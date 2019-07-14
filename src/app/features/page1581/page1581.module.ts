import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1581Component } from './page1581.component';

@NgModule({
  declarations: [Page1581Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1581Component }])],
  exports: [Page1581Component]
})
export class Page1581Module {}
