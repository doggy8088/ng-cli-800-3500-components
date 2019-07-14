import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1620Component } from './page1620.component';

@NgModule({
  declarations: [Page1620Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1620Component }])],
  exports: [Page1620Component]
})
export class Page1620Module {}
