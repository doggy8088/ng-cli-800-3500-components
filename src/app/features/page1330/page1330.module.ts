import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1330Component } from './page1330.component';

@NgModule({
  declarations: [Page1330Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1330Component }])],
  exports: [Page1330Component]
})
export class Page1330Module {}
