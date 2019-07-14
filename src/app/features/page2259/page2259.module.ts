import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2259Component } from './page2259.component';

@NgModule({
  declarations: [Page2259Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2259Component }])],
  exports: [Page2259Component]
})
export class Page2259Module {}
