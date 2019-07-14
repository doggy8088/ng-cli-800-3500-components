import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2383Component } from './page2383.component';

@NgModule({
  declarations: [Page2383Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2383Component }])],
  exports: [Page2383Component]
})
export class Page2383Module {}
