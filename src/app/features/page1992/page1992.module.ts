import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1992Component } from './page1992.component';

@NgModule({
  declarations: [Page1992Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1992Component }])],
  exports: [Page1992Component]
})
export class Page1992Module {}
