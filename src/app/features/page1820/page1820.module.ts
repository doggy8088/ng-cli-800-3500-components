import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1820Component } from './page1820.component';

@NgModule({
  declarations: [Page1820Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1820Component }])],
  exports: [Page1820Component]
})
export class Page1820Module {}
