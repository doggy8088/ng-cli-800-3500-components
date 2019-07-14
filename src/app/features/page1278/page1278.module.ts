import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1278Component } from './page1278.component';

@NgModule({
  declarations: [Page1278Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1278Component }])],
  exports: [Page1278Component]
})
export class Page1278Module {}
