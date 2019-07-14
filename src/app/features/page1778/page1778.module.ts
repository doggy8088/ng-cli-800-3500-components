import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1778Component } from './page1778.component';

@NgModule({
  declarations: [Page1778Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1778Component }])],
  exports: [Page1778Component]
})
export class Page1778Module {}
