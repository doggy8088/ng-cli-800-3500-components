import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1192Component } from './page1192.component';

@NgModule({
  declarations: [Page1192Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1192Component }])],
  exports: [Page1192Component]
})
export class Page1192Module {}
