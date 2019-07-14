import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1626Component } from './page1626.component';

@NgModule({
  declarations: [Page1626Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1626Component }])],
  exports: [Page1626Component]
})
export class Page1626Module {}
