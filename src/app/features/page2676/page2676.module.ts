import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2676Component } from './page2676.component';

@NgModule({
  declarations: [Page2676Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2676Component }])],
  exports: [Page2676Component]
})
export class Page2676Module {}
