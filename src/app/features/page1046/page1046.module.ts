import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1046Component } from './page1046.component';

@NgModule({
  declarations: [Page1046Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1046Component }])],
  exports: [Page1046Component]
})
export class Page1046Module {}
