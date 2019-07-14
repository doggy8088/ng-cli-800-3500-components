import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1092Component } from './page1092.component';

@NgModule({
  declarations: [Page1092Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1092Component }])],
  exports: [Page1092Component]
})
export class Page1092Module {}
