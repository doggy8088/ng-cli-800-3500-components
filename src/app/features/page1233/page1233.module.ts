import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1233Component } from './page1233.component';

@NgModule({
  declarations: [Page1233Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1233Component }])],
  exports: [Page1233Component]
})
export class Page1233Module {}
