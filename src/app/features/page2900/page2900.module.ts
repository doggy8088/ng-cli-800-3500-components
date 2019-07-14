import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2900Component } from './page2900.component';

@NgModule({
  declarations: [Page2900Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2900Component }])],
  exports: [Page2900Component]
})
export class Page2900Module {}
