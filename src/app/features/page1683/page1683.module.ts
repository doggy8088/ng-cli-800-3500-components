import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1683Component } from './page1683.component';

@NgModule({
  declarations: [Page1683Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1683Component }])],
  exports: [Page1683Component]
})
export class Page1683Module {}
