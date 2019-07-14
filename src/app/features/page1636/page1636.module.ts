import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1636Component } from './page1636.component';

@NgModule({
  declarations: [Page1636Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1636Component }])],
  exports: [Page1636Component]
})
export class Page1636Module {}
