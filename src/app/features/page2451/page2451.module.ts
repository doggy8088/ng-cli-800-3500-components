import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2451Component } from './page2451.component';

@NgModule({
  declarations: [Page2451Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2451Component }])],
  exports: [Page2451Component]
})
export class Page2451Module {}
