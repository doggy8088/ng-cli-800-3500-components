import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1020Component } from './page1020.component';

@NgModule({
  declarations: [Page1020Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1020Component }])],
  exports: [Page1020Component]
})
export class Page1020Module {}
