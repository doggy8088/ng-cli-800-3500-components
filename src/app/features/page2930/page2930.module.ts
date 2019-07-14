import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2930Component } from './page2930.component';

@NgModule({
  declarations: [Page2930Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2930Component }])],
  exports: [Page2930Component]
})
export class Page2930Module {}
