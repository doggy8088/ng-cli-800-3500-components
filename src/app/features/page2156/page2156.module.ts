import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2156Component } from './page2156.component';

@NgModule({
  declarations: [Page2156Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2156Component }])],
  exports: [Page2156Component]
})
export class Page2156Module {}
