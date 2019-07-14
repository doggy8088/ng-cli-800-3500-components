import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2786Component } from './page2786.component';

@NgModule({
  declarations: [Page2786Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2786Component }])],
  exports: [Page2786Component]
})
export class Page2786Module {}
