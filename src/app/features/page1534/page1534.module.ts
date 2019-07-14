import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1534Component } from './page1534.component';

@NgModule({
  declarations: [Page1534Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1534Component }])],
  exports: [Page1534Component]
})
export class Page1534Module {}
