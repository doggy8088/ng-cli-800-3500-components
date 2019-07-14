import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1893Component } from './page1893.component';

@NgModule({
  declarations: [Page1893Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1893Component }])],
  exports: [Page1893Component]
})
export class Page1893Module {}
