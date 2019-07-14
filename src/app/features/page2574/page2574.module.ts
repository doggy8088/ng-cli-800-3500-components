import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2574Component } from './page2574.component';

@NgModule({
  declarations: [Page2574Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2574Component }])],
  exports: [Page2574Component]
})
export class Page2574Module {}
