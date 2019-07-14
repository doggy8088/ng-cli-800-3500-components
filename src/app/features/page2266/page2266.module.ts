import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2266Component } from './page2266.component';

@NgModule({
  declarations: [Page2266Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2266Component }])],
  exports: [Page2266Component]
})
export class Page2266Module {}
