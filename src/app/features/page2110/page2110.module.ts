import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2110Component } from './page2110.component';

@NgModule({
  declarations: [Page2110Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2110Component }])],
  exports: [Page2110Component]
})
export class Page2110Module {}
