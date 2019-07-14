import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2951Component } from './page2951.component';

@NgModule({
  declarations: [Page2951Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2951Component }])],
  exports: [Page2951Component]
})
export class Page2951Module {}
