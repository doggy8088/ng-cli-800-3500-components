import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1463Component } from './page1463.component';

@NgModule({
  declarations: [Page1463Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1463Component }])],
  exports: [Page1463Component]
})
export class Page1463Module {}
