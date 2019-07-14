import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1847Component } from './page1847.component';

@NgModule({
  declarations: [Page1847Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1847Component }])],
  exports: [Page1847Component]
})
export class Page1847Module {}
