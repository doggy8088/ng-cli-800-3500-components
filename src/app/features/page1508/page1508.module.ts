import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1508Component } from './page1508.component';

@NgModule({
  declarations: [Page1508Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1508Component }])],
  exports: [Page1508Component]
})
export class Page1508Module {}
