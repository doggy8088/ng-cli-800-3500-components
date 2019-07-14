import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1217Component } from './page1217.component';

@NgModule({
  declarations: [Page1217Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1217Component }])],
  exports: [Page1217Component]
})
export class Page1217Module {}
