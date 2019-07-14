import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1294Component } from './page1294.component';

@NgModule({
  declarations: [Page1294Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1294Component }])],
  exports: [Page1294Component]
})
export class Page1294Module {}
