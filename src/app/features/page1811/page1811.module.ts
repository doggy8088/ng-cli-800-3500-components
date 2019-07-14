import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1811Component } from './page1811.component';

@NgModule({
  declarations: [Page1811Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1811Component }])],
  exports: [Page1811Component]
})
export class Page1811Module {}
