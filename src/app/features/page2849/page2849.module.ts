import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2849Component } from './page2849.component';

@NgModule({
  declarations: [Page2849Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2849Component }])],
  exports: [Page2849Component]
})
export class Page2849Module {}
