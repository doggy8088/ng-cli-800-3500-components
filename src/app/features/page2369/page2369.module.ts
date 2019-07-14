import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2369Component } from './page2369.component';

@NgModule({
  declarations: [Page2369Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2369Component }])],
  exports: [Page2369Component]
})
export class Page2369Module {}
