import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2720Component } from './page2720.component';

@NgModule({
  declarations: [Page2720Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2720Component }])],
  exports: [Page2720Component]
})
export class Page2720Module {}
