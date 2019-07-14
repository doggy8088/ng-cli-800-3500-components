import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0371Component } from './page0371.component';

@NgModule({
  declarations: [Page0371Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0371Component }])],
  exports: [Page0371Component]
})
export class Page0371Module {}
