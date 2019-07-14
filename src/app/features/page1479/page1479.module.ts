import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1479Component } from './page1479.component';

@NgModule({
  declarations: [Page1479Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1479Component }])],
  exports: [Page1479Component]
})
export class Page1479Module {}
