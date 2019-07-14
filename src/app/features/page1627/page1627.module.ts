import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1627Component } from './page1627.component';

@NgModule({
  declarations: [Page1627Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1627Component }])],
  exports: [Page1627Component]
})
export class Page1627Module {}
