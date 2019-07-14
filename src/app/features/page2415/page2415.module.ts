import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2415Component } from './page2415.component';

@NgModule({
  declarations: [Page2415Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2415Component }])],
  exports: [Page2415Component]
})
export class Page2415Module {}
