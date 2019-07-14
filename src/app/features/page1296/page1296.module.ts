import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1296Component } from './page1296.component';

@NgModule({
  declarations: [Page1296Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1296Component }])],
  exports: [Page1296Component]
})
export class Page1296Module {}
