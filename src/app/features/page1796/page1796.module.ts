import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1796Component } from './page1796.component';

@NgModule({
  declarations: [Page1796Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1796Component }])],
  exports: [Page1796Component]
})
export class Page1796Module {}
