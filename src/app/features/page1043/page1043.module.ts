import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1043Component } from './page1043.component';

@NgModule({
  declarations: [Page1043Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1043Component }])],
  exports: [Page1043Component]
})
export class Page1043Module {}
