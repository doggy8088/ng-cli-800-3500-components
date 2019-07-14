import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1639Component } from './page1639.component';

@NgModule({
  declarations: [Page1639Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1639Component }])],
  exports: [Page1639Component]
})
export class Page1639Module {}
