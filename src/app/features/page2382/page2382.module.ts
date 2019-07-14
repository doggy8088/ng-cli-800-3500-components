import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2382Component } from './page2382.component';

@NgModule({
  declarations: [Page2382Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2382Component }])],
  exports: [Page2382Component]
})
export class Page2382Module {}
