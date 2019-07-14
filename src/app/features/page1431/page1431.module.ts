import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1431Component } from './page1431.component';

@NgModule({
  declarations: [Page1431Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1431Component }])],
  exports: [Page1431Component]
})
export class Page1431Module {}
