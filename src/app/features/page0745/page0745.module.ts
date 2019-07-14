import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0745Component } from './page0745.component';

@NgModule({
  declarations: [Page0745Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0745Component }])],
  exports: [Page0745Component]
})
export class Page0745Module {}
