import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1603Component } from './page1603.component';

@NgModule({
  declarations: [Page1603Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1603Component }])],
  exports: [Page1603Component]
})
export class Page1603Module {}
