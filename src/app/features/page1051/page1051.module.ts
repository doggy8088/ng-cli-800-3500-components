import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1051Component } from './page1051.component';

@NgModule({
  declarations: [Page1051Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1051Component }])],
  exports: [Page1051Component]
})
export class Page1051Module {}
