import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2291Component } from './page2291.component';

@NgModule({
  declarations: [Page2291Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2291Component }])],
  exports: [Page2291Component]
})
export class Page2291Module {}
