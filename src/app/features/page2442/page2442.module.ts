import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2442Component } from './page2442.component';

@NgModule({
  declarations: [Page2442Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2442Component }])],
  exports: [Page2442Component]
})
export class Page2442Module {}
