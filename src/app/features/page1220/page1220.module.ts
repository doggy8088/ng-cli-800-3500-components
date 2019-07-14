import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1220Component } from './page1220.component';

@NgModule({
  declarations: [Page1220Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1220Component }])],
  exports: [Page1220Component]
})
export class Page1220Module {}
