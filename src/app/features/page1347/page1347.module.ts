import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1347Component } from './page1347.component';

@NgModule({
  declarations: [Page1347Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1347Component }])],
  exports: [Page1347Component]
})
export class Page1347Module {}
