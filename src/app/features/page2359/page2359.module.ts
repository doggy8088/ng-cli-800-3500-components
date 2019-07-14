import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2359Component } from './page2359.component';

@NgModule({
  declarations: [Page2359Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2359Component }])],
  exports: [Page2359Component]
})
export class Page2359Module {}
