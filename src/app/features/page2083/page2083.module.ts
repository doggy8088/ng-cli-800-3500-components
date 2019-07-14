import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2083Component } from './page2083.component';

@NgModule({
  declarations: [Page2083Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2083Component }])],
  exports: [Page2083Component]
})
export class Page2083Module {}
