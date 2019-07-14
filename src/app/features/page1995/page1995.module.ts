import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1995Component } from './page1995.component';

@NgModule({
  declarations: [Page1995Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1995Component }])],
  exports: [Page1995Component]
})
export class Page1995Module {}
