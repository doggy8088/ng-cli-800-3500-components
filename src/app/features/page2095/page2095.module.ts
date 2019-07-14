import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2095Component } from './page2095.component';

@NgModule({
  declarations: [Page2095Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2095Component }])],
  exports: [Page2095Component]
})
export class Page2095Module {}
