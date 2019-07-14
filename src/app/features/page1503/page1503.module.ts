import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1503Component } from './page1503.component';

@NgModule({
  declarations: [Page1503Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1503Component }])],
  exports: [Page1503Component]
})
export class Page1503Module {}
