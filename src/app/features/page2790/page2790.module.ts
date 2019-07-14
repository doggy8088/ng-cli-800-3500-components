import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2790Component } from './page2790.component';

@NgModule({
  declarations: [Page2790Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2790Component }])],
  exports: [Page2790Component]
})
export class Page2790Module {}
