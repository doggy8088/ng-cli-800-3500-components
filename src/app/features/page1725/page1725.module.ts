import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1725Component } from './page1725.component';

@NgModule({
  declarations: [Page1725Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1725Component }])],
  exports: [Page1725Component]
})
export class Page1725Module {}
