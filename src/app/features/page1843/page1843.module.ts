import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1843Component } from './page1843.component';

@NgModule({
  declarations: [Page1843Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1843Component }])],
  exports: [Page1843Component]
})
export class Page1843Module {}
