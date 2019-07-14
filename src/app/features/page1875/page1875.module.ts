import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1875Component } from './page1875.component';

@NgModule({
  declarations: [Page1875Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1875Component }])],
  exports: [Page1875Component]
})
export class Page1875Module {}
