import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2128Component } from './page2128.component';

@NgModule({
  declarations: [Page2128Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2128Component }])],
  exports: [Page2128Component]
})
export class Page2128Module {}
