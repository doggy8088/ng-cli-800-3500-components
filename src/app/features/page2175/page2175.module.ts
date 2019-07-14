import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2175Component } from './page2175.component';

@NgModule({
  declarations: [Page2175Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2175Component }])],
  exports: [Page2175Component]
})
export class Page2175Module {}
