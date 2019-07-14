import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1812Component } from './page1812.component';

@NgModule({
  declarations: [Page1812Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1812Component }])],
  exports: [Page1812Component]
})
export class Page1812Module {}
