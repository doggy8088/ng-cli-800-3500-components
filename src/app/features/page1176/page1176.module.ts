import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1176Component } from './page1176.component';

@NgModule({
  declarations: [Page1176Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1176Component }])],
  exports: [Page1176Component]
})
export class Page1176Module {}
