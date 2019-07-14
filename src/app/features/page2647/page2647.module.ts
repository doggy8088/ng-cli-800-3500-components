import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2647Component } from './page2647.component';

@NgModule({
  declarations: [Page2647Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2647Component }])],
  exports: [Page2647Component]
})
export class Page2647Module {}
