import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2386Component } from './page2386.component';

@NgModule({
  declarations: [Page2386Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2386Component }])],
  exports: [Page2386Component]
})
export class Page2386Module {}
