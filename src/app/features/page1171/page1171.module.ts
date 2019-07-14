import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1171Component } from './page1171.component';

@NgModule({
  declarations: [Page1171Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1171Component }])],
  exports: [Page1171Component]
})
export class Page1171Module {}
