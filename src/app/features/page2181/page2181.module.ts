import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2181Component } from './page2181.component';

@NgModule({
  declarations: [Page2181Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2181Component }])],
  exports: [Page2181Component]
})
export class Page2181Module {}
