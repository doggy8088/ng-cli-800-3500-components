import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1878Component } from './page1878.component';

@NgModule({
  declarations: [Page1878Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1878Component }])],
  exports: [Page1878Component]
})
export class Page1878Module {}
