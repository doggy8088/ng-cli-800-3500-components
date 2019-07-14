import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2492Component } from './page2492.component';

@NgModule({
  declarations: [Page2492Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2492Component }])],
  exports: [Page2492Component]
})
export class Page2492Module {}
