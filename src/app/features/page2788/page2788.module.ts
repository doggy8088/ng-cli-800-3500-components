import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2788Component } from './page2788.component';

@NgModule({
  declarations: [Page2788Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2788Component }])],
  exports: [Page2788Component]
})
export class Page2788Module {}
