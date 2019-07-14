import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1755Component } from './page1755.component';

@NgModule({
  declarations: [Page1755Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1755Component }])],
  exports: [Page1755Component]
})
export class Page1755Module {}
