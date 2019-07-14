import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1146Component } from './page1146.component';

@NgModule({
  declarations: [Page1146Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1146Component }])],
  exports: [Page1146Component]
})
export class Page1146Module {}
