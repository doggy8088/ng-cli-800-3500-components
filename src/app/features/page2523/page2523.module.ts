import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2523Component } from './page2523.component';

@NgModule({
  declarations: [Page2523Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2523Component }])],
  exports: [Page2523Component]
})
export class Page2523Module {}
