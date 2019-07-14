import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2672Component } from './page2672.component';

@NgModule({
  declarations: [Page2672Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2672Component }])],
  exports: [Page2672Component]
})
export class Page2672Module {}
