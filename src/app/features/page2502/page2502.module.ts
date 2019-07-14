import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2502Component } from './page2502.component';

@NgModule({
  declarations: [Page2502Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2502Component }])],
  exports: [Page2502Component]
})
export class Page2502Module {}
