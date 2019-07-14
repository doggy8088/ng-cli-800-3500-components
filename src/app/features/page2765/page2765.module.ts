import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2765Component } from './page2765.component';

@NgModule({
  declarations: [Page2765Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2765Component }])],
  exports: [Page2765Component]
})
export class Page2765Module {}
