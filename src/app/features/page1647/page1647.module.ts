import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1647Component } from './page1647.component';

@NgModule({
  declarations: [Page1647Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1647Component }])],
  exports: [Page1647Component]
})
export class Page1647Module {}
