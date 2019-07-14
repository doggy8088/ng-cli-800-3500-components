import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2265Component } from './page2265.component';

@NgModule({
  declarations: [Page2265Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2265Component }])],
  exports: [Page2265Component]
})
export class Page2265Module {}
