import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1998Component } from './page1998.component';

@NgModule({
  declarations: [Page1998Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1998Component }])],
  exports: [Page1998Component]
})
export class Page1998Module {}
