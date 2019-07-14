import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2830Component } from './page2830.component';

@NgModule({
  declarations: [Page2830Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2830Component }])],
  exports: [Page2830Component]
})
export class Page2830Module {}
