import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1104Component } from './page1104.component';

@NgModule({
  declarations: [Page1104Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1104Component }])],
  exports: [Page1104Component]
})
export class Page1104Module {}
