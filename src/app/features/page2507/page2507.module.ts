import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2507Component } from './page2507.component';

@NgModule({
  declarations: [Page2507Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2507Component }])],
  exports: [Page2507Component]
})
export class Page2507Module {}
