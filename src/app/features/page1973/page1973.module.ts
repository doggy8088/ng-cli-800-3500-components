import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1973Component } from './page1973.component';

@NgModule({
  declarations: [Page1973Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1973Component }])],
  exports: [Page1973Component]
})
export class Page1973Module {}
