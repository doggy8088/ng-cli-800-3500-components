import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1005Component } from './page1005.component';

@NgModule({
  declarations: [Page1005Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1005Component }])],
  exports: [Page1005Component]
})
export class Page1005Module {}
