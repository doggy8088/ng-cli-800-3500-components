import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2755Component } from './page2755.component';

@NgModule({
  declarations: [Page2755Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2755Component }])],
  exports: [Page2755Component]
})
export class Page2755Module {}
