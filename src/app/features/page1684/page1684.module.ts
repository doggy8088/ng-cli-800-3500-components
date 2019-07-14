import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1684Component } from './page1684.component';

@NgModule({
  declarations: [Page1684Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1684Component }])],
  exports: [Page1684Component]
})
export class Page1684Module {}
