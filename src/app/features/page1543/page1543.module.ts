import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1543Component } from './page1543.component';

@NgModule({
  declarations: [Page1543Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1543Component }])],
  exports: [Page1543Component]
})
export class Page1543Module {}
