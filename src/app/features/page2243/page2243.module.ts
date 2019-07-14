import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2243Component } from './page2243.component';

@NgModule({
  declarations: [Page2243Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2243Component }])],
  exports: [Page2243Component]
})
export class Page2243Module {}
