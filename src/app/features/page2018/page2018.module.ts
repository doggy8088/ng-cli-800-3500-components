import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2018Component } from './page2018.component';

@NgModule({
  declarations: [Page2018Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2018Component }])],
  exports: [Page2018Component]
})
export class Page2018Module {}
