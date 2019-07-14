import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1441Component } from './page1441.component';

@NgModule({
  declarations: [Page1441Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1441Component }])],
  exports: [Page1441Component]
})
export class Page1441Module {}
