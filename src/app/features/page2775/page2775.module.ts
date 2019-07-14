import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2775Component } from './page2775.component';

@NgModule({
  declarations: [Page2775Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2775Component }])],
  exports: [Page2775Component]
})
export class Page2775Module {}
