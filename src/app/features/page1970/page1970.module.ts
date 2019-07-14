import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1970Component } from './page1970.component';

@NgModule({
  declarations: [Page1970Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1970Component }])],
  exports: [Page1970Component]
})
export class Page1970Module {}
