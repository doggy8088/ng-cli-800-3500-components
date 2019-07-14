import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2348Component } from './page2348.component';

@NgModule({
  declarations: [Page2348Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2348Component }])],
  exports: [Page2348Component]
})
export class Page2348Module {}
