import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1261Component } from './page1261.component';

@NgModule({
  declarations: [Page1261Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1261Component }])],
  exports: [Page1261Component]
})
export class Page1261Module {}
