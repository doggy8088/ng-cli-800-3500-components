import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1569Component } from './page1569.component';

@NgModule({
  declarations: [Page1569Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1569Component }])],
  exports: [Page1569Component]
})
export class Page1569Module {}
