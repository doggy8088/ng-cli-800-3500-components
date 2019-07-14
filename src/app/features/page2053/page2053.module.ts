import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2053Component } from './page2053.component';

@NgModule({
  declarations: [Page2053Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2053Component }])],
  exports: [Page2053Component]
})
export class Page2053Module {}
