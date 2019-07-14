import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1018Component } from './page1018.component';

@NgModule({
  declarations: [Page1018Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1018Component }])],
  exports: [Page1018Component]
})
export class Page1018Module {}
