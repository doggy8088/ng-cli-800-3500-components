import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2670Component } from './page2670.component';

@NgModule({
  declarations: [Page2670Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2670Component }])],
  exports: [Page2670Component]
})
export class Page2670Module {}
