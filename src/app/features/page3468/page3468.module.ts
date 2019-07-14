import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3468Component } from './page3468.component';

@NgModule({
  declarations: [Page3468Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3468Component }])],
  exports: [Page3468Component]
})
export class Page3468Module {}
