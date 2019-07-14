import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2825Component } from './page2825.component';

@NgModule({
  declarations: [Page2825Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2825Component }])],
  exports: [Page2825Component]
})
export class Page2825Module {}
