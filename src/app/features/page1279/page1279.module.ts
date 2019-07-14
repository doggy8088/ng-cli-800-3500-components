import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1279Component } from './page1279.component';

@NgModule({
  declarations: [Page1279Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1279Component }])],
  exports: [Page1279Component]
})
export class Page1279Module {}
