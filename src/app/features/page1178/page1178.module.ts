import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1178Component } from './page1178.component';

@NgModule({
  declarations: [Page1178Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1178Component }])],
  exports: [Page1178Component]
})
export class Page1178Module {}
