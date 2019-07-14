import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1380Component } from './page1380.component';

@NgModule({
  declarations: [Page1380Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1380Component }])],
  exports: [Page1380Component]
})
export class Page1380Module {}
