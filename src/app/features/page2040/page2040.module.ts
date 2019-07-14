import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2040Component } from './page2040.component';

@NgModule({
  declarations: [Page2040Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2040Component }])],
  exports: [Page2040Component]
})
export class Page2040Module {}
