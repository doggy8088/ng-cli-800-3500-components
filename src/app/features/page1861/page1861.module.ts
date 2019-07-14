import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1861Component } from './page1861.component';

@NgModule({
  declarations: [Page1861Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1861Component }])],
  exports: [Page1861Component]
})
export class Page1861Module {}
