import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1116Component } from './page1116.component';

@NgModule({
  declarations: [Page1116Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1116Component }])],
  exports: [Page1116Component]
})
export class Page1116Module {}
