import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2400Component } from './page2400.component';

@NgModule({
  declarations: [Page2400Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2400Component }])],
  exports: [Page2400Component]
})
export class Page2400Module {}
