import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1584Component } from './page1584.component';

@NgModule({
  declarations: [Page1584Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1584Component }])],
  exports: [Page1584Component]
})
export class Page1584Module {}
