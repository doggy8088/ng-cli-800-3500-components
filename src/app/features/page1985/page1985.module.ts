import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1985Component } from './page1985.component';

@NgModule({
  declarations: [Page1985Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1985Component }])],
  exports: [Page1985Component]
})
export class Page1985Module {}
