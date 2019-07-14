import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2469Component } from './page2469.component';

@NgModule({
  declarations: [Page2469Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2469Component }])],
  exports: [Page2469Component]
})
export class Page2469Module {}
