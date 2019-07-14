import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1077Component } from './page1077.component';

@NgModule({
  declarations: [Page1077Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1077Component }])],
  exports: [Page1077Component]
})
export class Page1077Module {}
