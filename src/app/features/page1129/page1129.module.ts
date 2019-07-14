import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1129Component } from './page1129.component';

@NgModule({
  declarations: [Page1129Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1129Component }])],
  exports: [Page1129Component]
})
export class Page1129Module {}
