import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2468Component } from './page2468.component';

@NgModule({
  declarations: [Page2468Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2468Component }])],
  exports: [Page2468Component]
})
export class Page2468Module {}
