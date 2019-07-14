import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1677Component } from './page1677.component';

@NgModule({
  declarations: [Page1677Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1677Component }])],
  exports: [Page1677Component]
})
export class Page1677Module {}
