import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1401Component } from './page1401.component';

@NgModule({
  declarations: [Page1401Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1401Component }])],
  exports: [Page1401Component]
})
export class Page1401Module {}
