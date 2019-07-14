import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2835Component } from './page2835.component';

@NgModule({
  declarations: [Page2835Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2835Component }])],
  exports: [Page2835Component]
})
export class Page2835Module {}
