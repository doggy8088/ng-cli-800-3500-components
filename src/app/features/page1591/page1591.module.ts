import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1591Component } from './page1591.component';

@NgModule({
  declarations: [Page1591Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1591Component }])],
  exports: [Page1591Component]
})
export class Page1591Module {}
