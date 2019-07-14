import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1669Component } from './page1669.component';

@NgModule({
  declarations: [Page1669Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1669Component }])],
  exports: [Page1669Component]
})
export class Page1669Module {}
