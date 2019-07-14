import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2094Component } from './page2094.component';

@NgModule({
  declarations: [Page2094Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2094Component }])],
  exports: [Page2094Component]
})
export class Page2094Module {}
