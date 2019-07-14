import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1144Component } from './page1144.component';

@NgModule({
  declarations: [Page1144Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1144Component }])],
  exports: [Page1144Component]
})
export class Page1144Module {}
