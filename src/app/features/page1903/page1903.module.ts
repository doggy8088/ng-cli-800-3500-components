import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1903Component } from './page1903.component';

@NgModule({
  declarations: [Page1903Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1903Component }])],
  exports: [Page1903Component]
})
export class Page1903Module {}
