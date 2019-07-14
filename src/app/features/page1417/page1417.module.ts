import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1417Component } from './page1417.component';

@NgModule({
  declarations: [Page1417Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1417Component }])],
  exports: [Page1417Component]
})
export class Page1417Module {}
