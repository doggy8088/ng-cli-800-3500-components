import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1181Component } from './page1181.component';

@NgModule({
  declarations: [Page1181Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1181Component }])],
  exports: [Page1181Component]
})
export class Page1181Module {}
