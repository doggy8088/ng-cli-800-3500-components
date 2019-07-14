import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1169Component } from './page1169.component';

@NgModule({
  declarations: [Page1169Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1169Component }])],
  exports: [Page1169Component]
})
export class Page1169Module {}
