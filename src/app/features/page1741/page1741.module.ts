import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1741Component } from './page1741.component';

@NgModule({
  declarations: [Page1741Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1741Component }])],
  exports: [Page1741Component]
})
export class Page1741Module {}
