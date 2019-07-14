import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1926Component } from './page1926.component';

@NgModule({
  declarations: [Page1926Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1926Component }])],
  exports: [Page1926Component]
})
export class Page1926Module {}
