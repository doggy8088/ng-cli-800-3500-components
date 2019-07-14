import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2192Component } from './page2192.component';

@NgModule({
  declarations: [Page2192Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2192Component }])],
  exports: [Page2192Component]
})
export class Page2192Module {}
