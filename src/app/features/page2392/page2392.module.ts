import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2392Component } from './page2392.component';

@NgModule({
  declarations: [Page2392Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2392Component }])],
  exports: [Page2392Component]
})
export class Page2392Module {}
