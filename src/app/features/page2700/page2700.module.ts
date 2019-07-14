import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2700Component } from './page2700.component';

@NgModule({
  declarations: [Page2700Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2700Component }])],
  exports: [Page2700Component]
})
export class Page2700Module {}
