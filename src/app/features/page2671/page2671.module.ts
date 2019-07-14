import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2671Component } from './page2671.component';

@NgModule({
  declarations: [Page2671Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2671Component }])],
  exports: [Page2671Component]
})
export class Page2671Module {}
