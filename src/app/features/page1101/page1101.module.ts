import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1101Component } from './page1101.component';

@NgModule({
  declarations: [Page1101Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1101Component }])],
  exports: [Page1101Component]
})
export class Page1101Module {}
