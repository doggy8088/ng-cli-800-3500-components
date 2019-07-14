import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2060Component } from './page2060.component';

@NgModule({
  declarations: [Page2060Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2060Component }])],
  exports: [Page2060Component]
})
export class Page2060Module {}
