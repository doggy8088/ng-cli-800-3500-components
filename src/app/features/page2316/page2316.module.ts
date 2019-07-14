import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2316Component } from './page2316.component';

@NgModule({
  declarations: [Page2316Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2316Component }])],
  exports: [Page2316Component]
})
export class Page2316Module {}
