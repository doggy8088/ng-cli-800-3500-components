import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1687Component } from './page1687.component';

@NgModule({
  declarations: [Page1687Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1687Component }])],
  exports: [Page1687Component]
})
export class Page1687Module {}
