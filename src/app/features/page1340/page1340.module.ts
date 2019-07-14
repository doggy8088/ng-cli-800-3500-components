import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1340Component } from './page1340.component';

@NgModule({
  declarations: [Page1340Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1340Component }])],
  exports: [Page1340Component]
})
export class Page1340Module {}
