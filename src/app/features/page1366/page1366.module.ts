import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1366Component } from './page1366.component';

@NgModule({
  declarations: [Page1366Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1366Component }])],
  exports: [Page1366Component]
})
export class Page1366Module {}
