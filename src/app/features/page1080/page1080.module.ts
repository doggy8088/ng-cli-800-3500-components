import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1080Component } from './page1080.component';

@NgModule({
  declarations: [Page1080Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1080Component }])],
  exports: [Page1080Component]
})
export class Page1080Module {}
