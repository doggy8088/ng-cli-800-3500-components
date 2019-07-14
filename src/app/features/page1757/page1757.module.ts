import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1757Component } from './page1757.component';

@NgModule({
  declarations: [Page1757Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1757Component }])],
  exports: [Page1757Component]
})
export class Page1757Module {}
