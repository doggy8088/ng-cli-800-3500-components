import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1448Component } from './page1448.component';

@NgModule({
  declarations: [Page1448Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1448Component }])],
  exports: [Page1448Component]
})
export class Page1448Module {}
