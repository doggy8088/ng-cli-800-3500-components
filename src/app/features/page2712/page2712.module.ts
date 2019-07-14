import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2712Component } from './page2712.component';

@NgModule({
  declarations: [Page2712Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2712Component }])],
  exports: [Page2712Component]
})
export class Page2712Module {}
