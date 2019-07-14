import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2550Component } from './page2550.component';

@NgModule({
  declarations: [Page2550Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2550Component }])],
  exports: [Page2550Component]
})
export class Page2550Module {}
