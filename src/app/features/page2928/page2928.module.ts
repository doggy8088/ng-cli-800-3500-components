import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2928Component } from './page2928.component';

@NgModule({
  declarations: [Page2928Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2928Component }])],
  exports: [Page2928Component]
})
export class Page2928Module {}
