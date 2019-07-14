import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2254Component } from './page2254.component';

@NgModule({
  declarations: [Page2254Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2254Component }])],
  exports: [Page2254Component]
})
export class Page2254Module {}
