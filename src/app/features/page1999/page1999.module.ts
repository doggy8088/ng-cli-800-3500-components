import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1999Component } from './page1999.component';

@NgModule({
  declarations: [Page1999Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1999Component }])],
  exports: [Page1999Component]
})
export class Page1999Module {}
