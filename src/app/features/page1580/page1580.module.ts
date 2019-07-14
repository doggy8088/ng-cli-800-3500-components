import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1580Component } from './page1580.component';

@NgModule({
  declarations: [Page1580Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1580Component }])],
  exports: [Page1580Component]
})
export class Page1580Module {}
