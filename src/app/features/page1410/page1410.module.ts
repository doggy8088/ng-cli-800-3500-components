import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1410Component } from './page1410.component';

@NgModule({
  declarations: [Page1410Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1410Component }])],
  exports: [Page1410Component]
})
export class Page1410Module {}
