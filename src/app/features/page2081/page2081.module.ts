import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2081Component } from './page2081.component';

@NgModule({
  declarations: [Page2081Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2081Component }])],
  exports: [Page2081Component]
})
export class Page2081Module {}
