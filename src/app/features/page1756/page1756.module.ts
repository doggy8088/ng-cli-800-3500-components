import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1756Component } from './page1756.component';

@NgModule({
  declarations: [Page1756Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1756Component }])],
  exports: [Page1756Component]
})
export class Page1756Module {}
