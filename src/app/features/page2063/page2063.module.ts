import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2063Component } from './page2063.component';

@NgModule({
  declarations: [Page2063Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2063Component }])],
  exports: [Page2063Component]
})
export class Page2063Module {}
