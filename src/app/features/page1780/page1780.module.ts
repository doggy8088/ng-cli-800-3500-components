import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1780Component } from './page1780.component';

@NgModule({
  declarations: [Page1780Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1780Component }])],
  exports: [Page1780Component]
})
export class Page1780Module {}
