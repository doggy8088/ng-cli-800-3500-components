import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1204Component } from './page1204.component';

@NgModule({
  declarations: [Page1204Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1204Component }])],
  exports: [Page1204Component]
})
export class Page1204Module {}
