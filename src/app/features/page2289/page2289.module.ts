import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2289Component } from './page2289.component';

@NgModule({
  declarations: [Page2289Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2289Component }])],
  exports: [Page2289Component]
})
export class Page2289Module {}
