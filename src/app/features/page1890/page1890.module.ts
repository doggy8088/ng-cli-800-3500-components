import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1890Component } from './page1890.component';

@NgModule({
  declarations: [Page1890Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1890Component }])],
  exports: [Page1890Component]
})
export class Page1890Module {}
