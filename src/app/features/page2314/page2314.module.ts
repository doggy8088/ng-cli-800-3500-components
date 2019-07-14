import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2314Component } from './page2314.component';

@NgModule({
  declarations: [Page2314Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2314Component }])],
  exports: [Page2314Component]
})
export class Page2314Module {}
