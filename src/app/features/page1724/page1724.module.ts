import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1724Component } from './page1724.component';

@NgModule({
  declarations: [Page1724Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1724Component }])],
  exports: [Page1724Component]
})
export class Page1724Module {}
