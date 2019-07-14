import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1030Component } from './page1030.component';

@NgModule({
  declarations: [Page1030Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1030Component }])],
  exports: [Page1030Component]
})
export class Page1030Module {}
