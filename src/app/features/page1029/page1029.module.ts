import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1029Component } from './page1029.component';

@NgModule({
  declarations: [Page1029Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1029Component }])],
  exports: [Page1029Component]
})
export class Page1029Module {}
