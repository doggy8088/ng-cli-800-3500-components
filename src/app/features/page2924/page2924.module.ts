import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2924Component } from './page2924.component';

@NgModule({
  declarations: [Page2924Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2924Component }])],
  exports: [Page2924Component]
})
export class Page2924Module {}
