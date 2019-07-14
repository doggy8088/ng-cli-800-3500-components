import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2732Component } from './page2732.component';

@NgModule({
  declarations: [Page2732Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2732Component }])],
  exports: [Page2732Component]
})
export class Page2732Module {}
