import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1689Component } from './page1689.component';

@NgModule({
  declarations: [Page1689Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1689Component }])],
  exports: [Page1689Component]
})
export class Page1689Module {}
