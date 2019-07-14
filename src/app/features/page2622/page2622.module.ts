import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2622Component } from './page2622.component';

@NgModule({
  declarations: [Page2622Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2622Component }])],
  exports: [Page2622Component]
})
export class Page2622Module {}
