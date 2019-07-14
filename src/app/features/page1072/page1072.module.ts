import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1072Component } from './page1072.component';

@NgModule({
  declarations: [Page1072Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1072Component }])],
  exports: [Page1072Component]
})
export class Page1072Module {}
