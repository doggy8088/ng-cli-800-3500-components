import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2396Component } from './page2396.component';

@NgModule({
  declarations: [Page2396Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2396Component }])],
  exports: [Page2396Component]
})
export class Page2396Module {}
