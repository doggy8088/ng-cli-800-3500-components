import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1582Component } from './page1582.component';

@NgModule({
  declarations: [Page1582Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1582Component }])],
  exports: [Page1582Component]
})
export class Page1582Module {}
