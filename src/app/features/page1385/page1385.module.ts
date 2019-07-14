import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1385Component } from './page1385.component';

@NgModule({
  declarations: [Page1385Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1385Component }])],
  exports: [Page1385Component]
})
export class Page1385Module {}
