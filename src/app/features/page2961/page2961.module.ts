import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2961Component } from './page2961.component';

@NgModule({
  declarations: [Page2961Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2961Component }])],
  exports: [Page2961Component]
})
export class Page2961Module {}
