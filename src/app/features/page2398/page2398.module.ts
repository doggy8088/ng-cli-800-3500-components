import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2398Component } from './page2398.component';

@NgModule({
  declarations: [Page2398Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2398Component }])],
  exports: [Page2398Component]
})
export class Page2398Module {}
