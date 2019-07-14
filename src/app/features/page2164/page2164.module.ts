import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2164Component } from './page2164.component';

@NgModule({
  declarations: [Page2164Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2164Component }])],
  exports: [Page2164Component]
})
export class Page2164Module {}
