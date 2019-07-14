import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2370Component } from './page2370.component';

@NgModule({
  declarations: [Page2370Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2370Component }])],
  exports: [Page2370Component]
})
export class Page2370Module {}
