import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1066Component } from './page1066.component';

@NgModule({
  declarations: [Page1066Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1066Component }])],
  exports: [Page1066Component]
})
export class Page1066Module {}
