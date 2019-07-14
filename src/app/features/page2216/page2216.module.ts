import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2216Component } from './page2216.component';

@NgModule({
  declarations: [Page2216Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2216Component }])],
  exports: [Page2216Component]
})
export class Page2216Module {}
