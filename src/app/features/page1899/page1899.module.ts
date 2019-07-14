import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1899Component } from './page1899.component';

@NgModule({
  declarations: [Page1899Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1899Component }])],
  exports: [Page1899Component]
})
export class Page1899Module {}
