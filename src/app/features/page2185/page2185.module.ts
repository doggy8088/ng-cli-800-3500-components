import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2185Component } from './page2185.component';

@NgModule({
  declarations: [Page2185Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2185Component }])],
  exports: [Page2185Component]
})
export class Page2185Module {}
