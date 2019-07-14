import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2005Component } from './page2005.component';

@NgModule({
  declarations: [Page2005Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2005Component }])],
  exports: [Page2005Component]
})
export class Page2005Module {}
