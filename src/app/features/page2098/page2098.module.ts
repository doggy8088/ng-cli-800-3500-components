import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2098Component } from './page2098.component';

@NgModule({
  declarations: [Page2098Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2098Component }])],
  exports: [Page2098Component]
})
export class Page2098Module {}
