import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1041Component } from './page1041.component';

@NgModule({
  declarations: [Page1041Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1041Component }])],
  exports: [Page1041Component]
})
export class Page1041Module {}
