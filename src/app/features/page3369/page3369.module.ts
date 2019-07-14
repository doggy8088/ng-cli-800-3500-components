import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3369Component } from './page3369.component';

@NgModule({
  declarations: [Page3369Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3369Component }])],
  exports: [Page3369Component]
})
export class Page3369Module {}
