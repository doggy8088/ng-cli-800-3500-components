import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1301Component } from './page1301.component';

@NgModule({
  declarations: [Page1301Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1301Component }])],
  exports: [Page1301Component]
})
export class Page1301Module {}
