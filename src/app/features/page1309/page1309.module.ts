import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1309Component } from './page1309.component';

@NgModule({
  declarations: [Page1309Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1309Component }])],
  exports: [Page1309Component]
})
export class Page1309Module {}
