import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1535Component } from './page1535.component';

@NgModule({
  declarations: [Page1535Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1535Component }])],
  exports: [Page1535Component]
})
export class Page1535Module {}
