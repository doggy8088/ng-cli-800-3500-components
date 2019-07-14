import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1202Component } from './page1202.component';

@NgModule({
  declarations: [Page1202Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1202Component }])],
  exports: [Page1202Component]
})
export class Page1202Module {}
