import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1281Component } from './page1281.component';

@NgModule({
  declarations: [Page1281Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1281Component }])],
  exports: [Page1281Component]
})
export class Page1281Module {}
