import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2745Component } from './page2745.component';

@NgModule({
  declarations: [Page2745Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2745Component }])],
  exports: [Page2745Component]
})
export class Page2745Module {}
