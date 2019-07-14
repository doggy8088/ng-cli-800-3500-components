import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1686Component } from './page1686.component';

@NgModule({
  declarations: [Page1686Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1686Component }])],
  exports: [Page1686Component]
})
export class Page1686Module {}
