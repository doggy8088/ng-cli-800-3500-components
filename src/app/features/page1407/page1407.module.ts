import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1407Component } from './page1407.component';

@NgModule({
  declarations: [Page1407Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1407Component }])],
  exports: [Page1407Component]
})
export class Page1407Module {}
