import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1172Component } from './page1172.component';

@NgModule({
  declarations: [Page1172Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1172Component }])],
  exports: [Page1172Component]
})
export class Page1172Module {}
