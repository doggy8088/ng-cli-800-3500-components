import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2286Component } from './page2286.component';

@NgModule({
  declarations: [Page2286Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2286Component }])],
  exports: [Page2286Component]
})
export class Page2286Module {}
