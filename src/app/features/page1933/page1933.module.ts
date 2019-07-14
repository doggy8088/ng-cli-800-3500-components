import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1933Component } from './page1933.component';

@NgModule({
  declarations: [Page1933Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1933Component }])],
  exports: [Page1933Component]
})
export class Page1933Module {}
