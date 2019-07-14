import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2603Component } from './page2603.component';

@NgModule({
  declarations: [Page2603Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2603Component }])],
  exports: [Page2603Component]
})
export class Page2603Module {}
