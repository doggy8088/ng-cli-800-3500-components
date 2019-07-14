import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1520Component } from './page1520.component';

@NgModule({
  declarations: [Page1520Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1520Component }])],
  exports: [Page1520Component]
})
export class Page1520Module {}
