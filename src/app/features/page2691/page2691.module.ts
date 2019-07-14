import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2691Component } from './page2691.component';

@NgModule({
  declarations: [Page2691Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2691Component }])],
  exports: [Page2691Component]
})
export class Page2691Module {}
