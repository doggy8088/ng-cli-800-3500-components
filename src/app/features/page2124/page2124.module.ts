import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2124Component } from './page2124.component';

@NgModule({
  declarations: [Page2124Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2124Component }])],
  exports: [Page2124Component]
})
export class Page2124Module {}
