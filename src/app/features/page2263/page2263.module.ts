import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2263Component } from './page2263.component';

@NgModule({
  declarations: [Page2263Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2263Component }])],
  exports: [Page2263Component]
})
export class Page2263Module {}
