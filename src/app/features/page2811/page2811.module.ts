import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2811Component } from './page2811.component';

@NgModule({
  declarations: [Page2811Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2811Component }])],
  exports: [Page2811Component]
})
export class Page2811Module {}
