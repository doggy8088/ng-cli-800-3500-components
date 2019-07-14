import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2431Component } from './page2431.component';

@NgModule({
  declarations: [Page2431Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2431Component }])],
  exports: [Page2431Component]
})
export class Page2431Module {}
