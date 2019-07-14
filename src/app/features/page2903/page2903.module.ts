import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2903Component } from './page2903.component';

@NgModule({
  declarations: [Page2903Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2903Component }])],
  exports: [Page2903Component]
})
export class Page2903Module {}
