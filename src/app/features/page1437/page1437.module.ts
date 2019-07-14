import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1437Component } from './page1437.component';

@NgModule({
  declarations: [Page1437Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1437Component }])],
  exports: [Page1437Component]
})
export class Page1437Module {}
