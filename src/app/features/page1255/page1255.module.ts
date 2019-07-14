import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1255Component } from './page1255.component';

@NgModule({
  declarations: [Page1255Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1255Component }])],
  exports: [Page1255Component]
})
export class Page1255Module {}
