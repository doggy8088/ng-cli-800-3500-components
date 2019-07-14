import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2303Component } from './page2303.component';

@NgModule({
  declarations: [Page2303Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2303Component }])],
  exports: [Page2303Component]
})
export class Page2303Module {}
