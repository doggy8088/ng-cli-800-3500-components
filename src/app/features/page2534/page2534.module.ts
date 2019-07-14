import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2534Component } from './page2534.component';

@NgModule({
  declarations: [Page2534Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2534Component }])],
  exports: [Page2534Component]
})
export class Page2534Module {}
