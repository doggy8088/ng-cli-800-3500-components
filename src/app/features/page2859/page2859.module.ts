import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2859Component } from './page2859.component';

@NgModule({
  declarations: [Page2859Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2859Component }])],
  exports: [Page2859Component]
})
export class Page2859Module {}
