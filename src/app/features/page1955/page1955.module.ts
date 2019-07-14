import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1955Component } from './page1955.component';

@NgModule({
  declarations: [Page1955Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1955Component }])],
  exports: [Page1955Component]
})
export class Page1955Module {}
