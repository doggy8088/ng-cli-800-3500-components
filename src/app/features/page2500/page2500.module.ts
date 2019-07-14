import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2500Component } from './page2500.component';

@NgModule({
  declarations: [Page2500Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2500Component }])],
  exports: [Page2500Component]
})
export class Page2500Module {}
