import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2730Component } from './page2730.component';

@NgModule({
  declarations: [Page2730Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2730Component }])],
  exports: [Page2730Component]
})
export class Page2730Module {}
