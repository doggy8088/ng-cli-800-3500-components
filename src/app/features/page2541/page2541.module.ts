import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2541Component } from './page2541.component';

@NgModule({
  declarations: [Page2541Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2541Component }])],
  exports: [Page2541Component]
})
export class Page2541Module {}
