import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1346Component } from './page1346.component';

@NgModule({
  declarations: [Page1346Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1346Component }])],
  exports: [Page1346Component]
})
export class Page1346Module {}
