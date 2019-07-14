import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0095Component } from './page0095.component';

@NgModule({
  declarations: [Page0095Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0095Component }])],
  exports: [Page0095Component]
})
export class Page0095Module {}
