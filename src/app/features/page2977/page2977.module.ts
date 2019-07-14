import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2977Component } from './page2977.component';

@NgModule({
  declarations: [Page2977Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2977Component }])],
  exports: [Page2977Component]
})
export class Page2977Module {}
