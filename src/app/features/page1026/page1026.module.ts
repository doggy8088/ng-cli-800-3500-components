import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1026Component } from './page1026.component';

@NgModule({
  declarations: [Page1026Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1026Component }])],
  exports: [Page1026Component]
})
export class Page1026Module {}
