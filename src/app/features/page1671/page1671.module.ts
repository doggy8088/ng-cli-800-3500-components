import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1671Component } from './page1671.component';

@NgModule({
  declarations: [Page1671Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1671Component }])],
  exports: [Page1671Component]
})
export class Page1671Module {}
