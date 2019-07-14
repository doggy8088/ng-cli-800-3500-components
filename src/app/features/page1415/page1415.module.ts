import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1415Component } from './page1415.component';

@NgModule({
  declarations: [Page1415Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1415Component }])],
  exports: [Page1415Component]
})
export class Page1415Module {}
