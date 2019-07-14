import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1449Component } from './page1449.component';

@NgModule({
  declarations: [Page1449Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1449Component }])],
  exports: [Page1449Component]
})
export class Page1449Module {}
