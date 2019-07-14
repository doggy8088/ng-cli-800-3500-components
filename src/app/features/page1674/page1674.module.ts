import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1674Component } from './page1674.component';

@NgModule({
  declarations: [Page1674Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1674Component }])],
  exports: [Page1674Component]
})
export class Page1674Module {}
