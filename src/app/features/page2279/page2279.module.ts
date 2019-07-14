import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2279Component } from './page2279.component';

@NgModule({
  declarations: [Page2279Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2279Component }])],
  exports: [Page2279Component]
})
export class Page2279Module {}
