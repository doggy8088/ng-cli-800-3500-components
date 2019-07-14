import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1922Component } from './page1922.component';

@NgModule({
  declarations: [Page1922Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1922Component }])],
  exports: [Page1922Component]
})
export class Page1922Module {}
