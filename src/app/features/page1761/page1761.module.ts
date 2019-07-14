import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1761Component } from './page1761.component';

@NgModule({
  declarations: [Page1761Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1761Component }])],
  exports: [Page1761Component]
})
export class Page1761Module {}
