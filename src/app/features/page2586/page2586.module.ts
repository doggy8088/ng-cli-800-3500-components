import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2586Component } from './page2586.component';

@NgModule({
  declarations: [Page2586Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2586Component }])],
  exports: [Page2586Component]
})
export class Page2586Module {}
