import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3465Component } from './page3465.component';

@NgModule({
  declarations: [Page3465Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3465Component }])],
  exports: [Page3465Component]
})
export class Page3465Module {}
