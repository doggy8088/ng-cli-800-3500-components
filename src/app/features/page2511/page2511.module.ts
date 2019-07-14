import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2511Component } from './page2511.component';

@NgModule({
  declarations: [Page2511Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2511Component }])],
  exports: [Page2511Component]
})
export class Page2511Module {}
