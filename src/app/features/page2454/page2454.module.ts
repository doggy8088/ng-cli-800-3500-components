import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2454Component } from './page2454.component';

@NgModule({
  declarations: [Page2454Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2454Component }])],
  exports: [Page2454Component]
})
export class Page2454Module {}
