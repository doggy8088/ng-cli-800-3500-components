import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1274Component } from './page1274.component';

@NgModule({
  declarations: [Page1274Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1274Component }])],
  exports: [Page1274Component]
})
export class Page1274Module {}
