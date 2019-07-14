import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1888Component } from './page1888.component';

@NgModule({
  declarations: [Page1888Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1888Component }])],
  exports: [Page1888Component]
})
export class Page1888Module {}
