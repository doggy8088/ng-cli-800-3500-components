import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2186Component } from './page2186.component';

@NgModule({
  declarations: [Page2186Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2186Component }])],
  exports: [Page2186Component]
})
export class Page2186Module {}
