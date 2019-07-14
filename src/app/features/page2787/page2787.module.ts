import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2787Component } from './page2787.component';

@NgModule({
  declarations: [Page2787Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2787Component }])],
  exports: [Page2787Component]
})
export class Page2787Module {}
