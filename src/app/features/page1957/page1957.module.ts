import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1957Component } from './page1957.component';

@NgModule({
  declarations: [Page1957Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1957Component }])],
  exports: [Page1957Component]
})
export class Page1957Module {}
