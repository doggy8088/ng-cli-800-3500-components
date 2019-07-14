import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2706Component } from './page2706.component';

@NgModule({
  declarations: [Page2706Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2706Component }])],
  exports: [Page2706Component]
})
export class Page2706Module {}
