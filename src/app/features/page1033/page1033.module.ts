import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1033Component } from './page1033.component';

@NgModule({
  declarations: [Page1033Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1033Component }])],
  exports: [Page1033Component]
})
export class Page1033Module {}
