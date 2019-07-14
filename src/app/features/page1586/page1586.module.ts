import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1586Component } from './page1586.component';

@NgModule({
  declarations: [Page1586Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1586Component }])],
  exports: [Page1586Component]
})
export class Page1586Module {}
