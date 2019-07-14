import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2319Component } from './page2319.component';

@NgModule({
  declarations: [Page2319Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2319Component }])],
  exports: [Page2319Component]
})
export class Page2319Module {}
