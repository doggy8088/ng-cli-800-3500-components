import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1987Component } from './page1987.component';

@NgModule({
  declarations: [Page1987Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1987Component }])],
  exports: [Page1987Component]
})
export class Page1987Module {}
