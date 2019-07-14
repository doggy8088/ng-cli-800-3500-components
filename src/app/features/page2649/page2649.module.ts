import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2649Component } from './page2649.component';

@NgModule({
  declarations: [Page2649Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2649Component }])],
  exports: [Page2649Component]
})
export class Page2649Module {}
