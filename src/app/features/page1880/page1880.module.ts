import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1880Component } from './page1880.component';

@NgModule({
  declarations: [Page1880Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1880Component }])],
  exports: [Page1880Component]
})
export class Page1880Module {}
