import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2695Component } from './page2695.component';

@NgModule({
  declarations: [Page2695Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2695Component }])],
  exports: [Page2695Component]
})
export class Page2695Module {}
