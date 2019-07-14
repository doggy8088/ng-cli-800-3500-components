import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2313Component } from './page2313.component';

@NgModule({
  declarations: [Page2313Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2313Component }])],
  exports: [Page2313Component]
})
export class Page2313Module {}
