import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1175Component } from './page1175.component';

@NgModule({
  declarations: [Page1175Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1175Component }])],
  exports: [Page1175Component]
})
export class Page1175Module {}
