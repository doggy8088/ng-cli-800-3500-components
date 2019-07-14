import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1969Component } from './page1969.component';

@NgModule({
  declarations: [Page1969Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1969Component }])],
  exports: [Page1969Component]
})
export class Page1969Module {}
