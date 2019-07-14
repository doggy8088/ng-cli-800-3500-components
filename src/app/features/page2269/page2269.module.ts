import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2269Component } from './page2269.component';

@NgModule({
  declarations: [Page2269Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2269Component }])],
  exports: [Page2269Component]
})
export class Page2269Module {}
