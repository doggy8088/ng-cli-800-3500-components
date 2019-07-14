import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1102Component } from './page1102.component';

@NgModule({
  declarations: [Page1102Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1102Component }])],
  exports: [Page1102Component]
})
export class Page1102Module {}
