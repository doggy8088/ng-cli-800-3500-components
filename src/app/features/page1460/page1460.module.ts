import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1460Component } from './page1460.component';

@NgModule({
  declarations: [Page1460Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1460Component }])],
  exports: [Page1460Component]
})
export class Page1460Module {}
