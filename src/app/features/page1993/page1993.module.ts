import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1993Component } from './page1993.component';

@NgModule({
  declarations: [Page1993Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1993Component }])],
  exports: [Page1993Component]
})
export class Page1993Module {}
