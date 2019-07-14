import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1115Component } from './page1115.component';

@NgModule({
  declarations: [Page1115Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1115Component }])],
  exports: [Page1115Component]
})
export class Page1115Module {}
